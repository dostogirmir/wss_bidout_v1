import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connect from "../server/config/mongdb.js";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";

const __dirname = path.dirname(import.meta.url);
const app = express();

dotenv.config();

app.use(helmet());
app.use(morgan("common"));
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

mongoose.set('strictQuery', true);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/assets");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage });
await connect();

app.get("/", (req, res) => {
    res.send("Hello World");
});


