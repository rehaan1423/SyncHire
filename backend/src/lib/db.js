import mongoose from "mongoose";
import { ENV } from "./env.js";


export const connectDB = async() =>{
    try{
        const conn = await mongoose.connect(ENV.MONGO_URI);
        console.log("MONGO DB Connected",conn.connection.host);
    }
    catch(error){
        console.log("Connection To Mongo Failed",error);
        process.exit(1);
    }
}