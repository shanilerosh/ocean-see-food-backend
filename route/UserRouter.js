const express = require("express");
const { saveUser, checkuser } = require("../controller/UserController");
const userRouter = express.Router();

userRouter.post("/saveUser", saveUser);
userRouter.get("/checkUser", checkuser);

module.exports = userRouter;
