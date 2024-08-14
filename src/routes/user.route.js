import express from "express";
import {
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
const userRouter = express.Router();

userRouter.post(
  "/register-user",
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

userRouter.post("/login-user", loginUser);
userRouter.post("/logout-user", verifyJwt, logoutUser);
userRouter.post("/refresh-token", refreshAccessToken);

export { userRouter };
