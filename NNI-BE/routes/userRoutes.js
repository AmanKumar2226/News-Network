import express from "express";
import { addUser, getUsers, login, updateUser } from "../controllers/userController.js";
import upload from "../middlewares/multerConfig.js";
import fetchUser from "../middlewares/fetchUser.js";
const router = express.Router();

router.post("/sign-up", upload.fields([
    { name: 'profilePicture', maxCount: 1 },
    { name: 'banner', maxCount: 1 }
  ]), addUser);

  router.post("/login", login)

router.get("/get-users", fetchUser, getUsers);

router.put("/update-user",fetchUser, updateUser);


export default router;
