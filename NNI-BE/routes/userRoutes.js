import express from "express";
import { addUser, getUsers, login } from "../controllers/userController.js";
import upload from "../middlewares/multerConfig.js";
import fetchUser from "../middlewares/fetchUser.js";

const router = express.Router();

router.post("/sign-up", upload.fields([
    { name: 'profilePicture', maxCount: 1 },
    { name: 'banner', maxCount: 1 }
  ]), addUser);

  router.post("/login", login)

router.get("/get-users", fetchUser, getUsers);


export default router;
