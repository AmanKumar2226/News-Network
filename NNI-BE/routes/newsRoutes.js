import express from "express";
import { addNews, getNews } from "../controllers/newsController.js";
import upload from "../middlewares/multerConfig.js";

const router = express.Router();

router.post("/add-news", upload.single("image"), addNews);
router.get("/add-news", getNews);

export default router;
