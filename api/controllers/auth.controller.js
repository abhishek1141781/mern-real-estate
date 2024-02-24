import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json("User created from auth.controller.js !!!");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUserDetail = await User.findOne({ email });
    if (!validUserDetail) return next(errorHandler(404, "User not found!!!"));
    const validPassword = bcryptjs.compareSync(
      password,
      validUserDetail.password
    );
    if (!validPassword) return next(errorHandler(401, "Invalid password!"));

    const token = jwt.sign(
      { id: validUserDetail._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    const { password: pass, ...rest } = validUserDetail._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      const { password: pass, ...rest } = user._doc;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          req.body.name.split(" ").join("").toLowerCase() +
          Math.random().toString(36).slice(-4),
        email: req.body.email,
        password: hashedPassword,
        avatar: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = user._doc;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

export const signout = async (req, res, next) => {
  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json("user has been logged out");
  } catch (error) {
    next(error);
  }
};

export const sendOtp = async (req, res, next) => {
  try {
    const { email } = req.body;
    // const email = req.body;
    console.log(email);
    // const host = window.location.hostname;
    const host = req.get("host");

    console.log(host);

    const user = await User.findOne({ email: email });

    // if user exists
    if (!user) res.status(404).json("user email not found");

    // const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "abhishek1141781@gmail.com",
        pass: process.env.APP_EMAIL_PASSKEY,
      },
    });

    var mailOptions = {
      from: "abhishek1141781@gmail.com",
      to: email,
      subject: "Reset Your ThalEstate Password",
      // text: `http://localhost:5173/reset-password/${user._id}/${token}`,
      text: `Click the link to reset your password 
      http://${host}/reset-password/${user._id}/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        var resp = info.response;
        return res.status(200).json({ resp });
      }
    });
  } catch (error) {
    next(error);
  }
};

export const updatePassword = async (req, res, next) => {
  try {
    const { id, token } = req.params;
    const { email, password, passwordConfirm } = req.body;

    if (password !== passwordConfirm)
      return res.status(401).json({
        message: "Passwords do not match",
        status: 401,
        success: false,
      });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(400).json("Bad password reset link");
      } else {
        bcryptjs
          .hash(password, 10)
          .then((hashedPass) => {
            User.findByIdAndUpdate({ _id: id }, { password: hashedPass })
              .then((u) =>
                res.status(201).json("password updated successfully")
              )
              .catch((err) =>
                res.status(400).json("error updating password in database")
              );
          })
          .catch((err) =>
            res.status(404).json("error creating hashed password")
          );
      }
    });
  } catch (error) {
    next(error);
  }
};
