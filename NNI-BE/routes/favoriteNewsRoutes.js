import express from "express";
import { addFavoriteNews, deleteFavoriteNews, getFavoriteNews } from "../controllers/favoriteNewsController.js";

const router = express.Router();

router.post('/add-favorite',addFavoriteNews)
router.get('/get-favorite/:userId',getFavoriteNews)
router.delete('/remove-favorite/:favoriteId',deleteFavoriteNews)



export default router;