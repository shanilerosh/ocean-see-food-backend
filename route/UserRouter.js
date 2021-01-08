const express = require("express");
const {
  saveUser,
  checkuser,
  checkAdmin,
} = require("../controller/UserController");
const userRouter = express.Router();

userRouter.post("/saveUser", saveUser);
userRouter.post("/checkUser", checkuser);
userRouter.post("/checkAdmin", checkAdmin);

module.exports = userRouter;
