import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials : true
}));
app.use(express.json({limit: "16kb"}));
//files folders images assets favicon
app.use(express.static("public"));
//server se cookies access and set krna h crud operations ke liye
app.use(cookieParser());




