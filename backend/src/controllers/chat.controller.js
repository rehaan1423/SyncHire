import { chatClient } from "../lib/stream.js";

export const getStreamToken = async (req, res) => {
    try {
        const userId = req.auth.clerkId;
        const token = chatClient.createToken(userId);

        res.status(200).json({ token, userId, userName: req.auth.name, userImage: req.auth.image });
    } catch (err) {
        console.log("error in getStream token in chat controller",err);
        res.status(500).json({message:"Internal Server Error"});
    }
}