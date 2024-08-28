import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();
import connectCloudinary from "./config/cloudinary";

import connectDB from "./config/mongodb";
import songRouter from "./routes/songRoute";
import albumRouter from "./routes/albumRoute";

// app config
const app = express();
const port = process.env.PORT || 4000
connectCloudinary()
connectDB()

// middlewares
app.use(express.json())
app.use(cors())

// Initializing Routers
app.use("/api/song", songRouter )
app.use("/api/album", albumRouter )

app.get("/", (req:any, res:any) => res.json("API Working"))

app.listen(4000, () => console.log(`Server started on ${port}`))

module.exports = app;