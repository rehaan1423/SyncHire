import express from "express";
import { ENV } from "./lib/env.js";

const app  = express();
const port = ENV.PORT;

app.listen(port,()=>{
    console.log(`Server Running on port ${port}`);
})
