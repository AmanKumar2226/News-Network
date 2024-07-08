import express from "express";
import { addNews, deleteNews, getNews } from "../controllers/newsController.js";
import upload from "../middlewares/multerConfig.js";

const router = express.Router();

router.post("/add-news", upload.single("image"), addNews);
router.get("/get-news", getNews);
router.delete('/delete-news/:id',deleteNews);

export default router;
