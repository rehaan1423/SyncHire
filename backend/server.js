import dns from "node:dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import express from "express";
import cors from "cors";
import axios from "axios";
import path from "path";
import { ENV } from "./src/lib/env.js";
import { connectDB } from "./src/lib/db.js";
import { clerkMiddleware } from '@clerk/express';
import chatRoutes from "./src/routes/chatRoutes.js";
import sessionRoutes from "./src/routes/sessionRoutes.js";
import webhookRoutes from "./src/routes/webhookRoutes.js";

const app = express();
const __dirname = path.resolve();

app.use(
  "/api/webhooks/clerk",
  express.raw({ type: "application/json" }),
  webhookRoutes
);

app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(clerkMiddleware());

app.use("/api/sessions", sessionRoutes);
app.use("/api/chat", chatRoutes);

app.post("/jdoodle/v1/execute", async (req, res) => {
    try {
        const response = await axios.post("https://api.jdoodle.com/v1/execute", req.body);
        res.status(200).json(response.data);
    } catch (error) {
        console.error("JDoodle Proxy Error:", error.message);
        res.status(error.response?.status || 500).json(error.response?.data || { error: "Proxy failed" });
    }
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    });
}

const startServer = async () => {
    await connectDB();
    app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));
};

startServer();