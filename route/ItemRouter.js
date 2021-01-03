const express = require("express");
const { saveItem, findItems } = require("../controller/ItemController");
const itemRouter = express.Router();

itemRouter.post("/saveItem", saveItem);
itemRouter.get("/getAllItems", findItems);

module.exports = itemRouter;
