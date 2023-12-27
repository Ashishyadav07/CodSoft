import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//Register || Method - Post
router.post("/register", registerController);

//Login || Method - Post
router.post("/login", loginController);

//Forgot Password || Method - Post
router.post("/forgot-password", forgotPasswordController);

//Test || Method - Get
router.get("/test", requireSignIn, isAdmin, testController);

//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});
export default router;
