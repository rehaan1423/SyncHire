import dns from "node:dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import express from "express";
import cors from "cors";
import { ENV } from "./src/lib/env.js";
import path from "path"
import { connectDB } from "./src//lib/db.js";
import { clerkMiddleware } from '@clerk/express'
import chatRoutes from "./src/routes/chatRoutes.js";
import sessionRoutes from "./src/routes/sessionRoutes.js";
import webhookRoutes from "./src/routes/webhookRoutes.js";

const app = express();
const port = ENV.PORT;
const __dirname = path.resolve();

app.use(
  "/api/webhooks/clerk",
  express.raw({ type: "application/json" }),
  webhookRoutes
);

app.use(express.json());
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}));
app.use(clerkMiddleware());

app.get("/test", (req, res) => res.send("tested"));
app.get("/test3", (req, res) => res.send("tested3"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    });
}

app.use("/api/sessions",sessionRoutes);
app.use("/api/chat",chatRoutes);

const startServer = async () => {
    await connectDB();
    app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));
};

startServer();
