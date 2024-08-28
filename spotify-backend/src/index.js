const express = require("express");
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
import connectCloudinary from "./config/cloudinary.js";

import connectDB from "./config/mongodb.js";
import songRouter from "./routes/songRoute.js";
import albumRouter from "./routes/albumRoute.js";

// app config

const port = process.env.PORT || 4000
connectCloudinary()
connectDB()

// middlewares
app.use(express.json())
app.use(cors())

// Initializing Routers
app.use("/api/song", songRouter )
app.use("/api/album", albumRouter )

app.get("/", (req, res) => res.json("API Working"))

app.listen(port, () => console.log(`Server started on ${port}`))

module.exports = app;