import express from "express";
import { addNews, deleteNews, getNews, newsDescription, updateNews } from "../controllers/newsController.js";
import upload from "../middlewares/multerConfig.js";

const router = express.Router();

router.post("/add-news", upload.single("image"), addNews);
router.get("/get-news", getNews);
router.delete('/delete-news/:id',deleteNews);
router.get("/get-news/:id", newsDescription);
router.put('/update-news/:id',updateNews);

export default router;
