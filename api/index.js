import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cookieParser())

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to mongoose");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("server runing on 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error: default";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});
