const express = require("express");
const {
  saveUser,
  checkuser,
  checkAdmin,
  deleteUser,
  updateStatus,
  getAllUsers,
} = require("../controller/UserController");
const userRouter = express.Router();

userRouter.post("/saveUser", saveUser);
userRouter.post("/checkUser", checkuser);
userRouter.post("/checkAdmin", checkAdmin);
userRouter.post("/deleteUser", deleteUser);
userRouter.post("/updateStatus", updateStatus);
userRouter.post("/getAllUsers", getAllUsers);

module.exports = userRouter;
