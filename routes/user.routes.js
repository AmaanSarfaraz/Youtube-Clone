import { Router } from "express";
import { Route } from "react-router-dom";
import { registerUser } from "../controllers/user.controller.js";
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

export default router;
