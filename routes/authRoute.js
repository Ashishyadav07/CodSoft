import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//Register || Method - Post
router.post("/register", registerController);

//Login || Method - Post
router.post("/login", loginController);

//Test || Method - Get
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
