const express = require("express");
const {
  saveItem,
  findItems,
  deleteItem,
} = require("../controller/ItemController");
const itemRouter = express.Router();

itemRouter.post("/saveItem", saveItem);
itemRouter.get("/getAllItems", findItems);
itemRouter.get("/deleteItem", deleteItem);

module.exports = itemRouter;
