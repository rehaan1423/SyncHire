import express from "express";
import { Webhook } from "svix";
import { ENV } from "../lib/env.js";
import { connectDB } from "../lib/db.js";
import User from "../models/User.js";
import { deleteStreamUser, upsertStreamUser } from "../lib/stream.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const SIGNING_SECRET = ENV.CLERK_WEBHOOK_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error("Error: Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env");
  }

  const wh = new Webhook(SIGNING_SECRET);

  // Get headers
  const headers = req.headers;
  const svix_id = headers["svix-id"];
  const svix_timestamp = headers["svix-timestamp"];
  const svix_signature = headers["svix-signature"];

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return res.status(400).json({ success: false, message: "Error: Missing svix headers" });
  }

  let evt;

  try {
    evt = wh.verify(req.body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Error: Could not verify webhook:", err.message);
    return res.status(400).json({ success: false, message: err.message });
  }

  const { id } = evt.data;
  const eventType = evt.type;

  if (eventType === "user.created") {
    const { email_addresses, first_name, last_name, image_url } = evt.data;
    const newUser = {
      clerkId: id,
      email: email_addresses[0]?.email_address,
      name: `${first_name || ""} ${last_name || ""}`,
      profileImage: image_url,
    };

    await User.create(newUser);
    await upsertStreamUser({
      id: newUser.clerkId.toString(),
      name: newUser.name,
      image: newUser.profileImage,
    });
  }

  if (eventType === "user.deleted") {
    await User.deleteOne({ clerkId: id });
    await deleteStreamUser(id.toString());
  }

  return res.status(200).json({ success: true, message: "Webhook received" });
});

export default router;