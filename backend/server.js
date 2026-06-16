import express from "express";
import { ENV } from "./lib/env.js";
import path from "path"

const __dirname = path.resolve();

const app  = express();
const port = ENV.PORT;

app.get("/test",(req,res) => res.send("tested"));
app.get("/test3",(req,res) => res.send("tested3"));

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get("{*any}",(req,res) =>{
        res.sendFile(path.join(__dirname,"../frontend/dist/index.html"));
    });
}

app.listen(port,()=>{
    console.log(`Server Running on port ${port}`);
})
