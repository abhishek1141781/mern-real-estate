import express from "express";
import { google, signin, signout, signup, sendOtp, updatePassword } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/signin", signin);
authRouter.post("/signin/forgot-password", sendOtp);
authRouter.post("/signin/reset-password/:id/:token", updatePassword);
authRouter.post("/google", google);
authRouter.get("/signout", signout);

export default authRouter;
