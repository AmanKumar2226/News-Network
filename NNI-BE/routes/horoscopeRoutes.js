import express from "express";

import {getHoroscope} from "../controllers/horoScopeController.js";


const router = express.Router();

router.get('/get-horoscope', getHoroscope)


export default router;
