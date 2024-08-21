import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import newsRoutes from "./routes/newsRoutes.js"
import horoscopeRoutes from "./routes/horoscopeRoutes.js"
import FavoriteNewsRoutes from "./routes/favoriteNewsRoutes.js";
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
// Connect to database
connectDB();

// Routes
app.use("/api/nni", userRoutes);
app.use("/api/nni", newsRoutes);
app.use("/api/nni", horoscopeRoutes)
app.use("/api/nni", FavoriteNewsRoutes)

export default app;
