const express = require("express");
const {
  placeOrder,
  viewOrders,
  getAllOrders,
} = require("../controller/OrderController");
const orderRouter = express.Router();

orderRouter.post("/placeorder", placeOrder);
orderRouter.get("/getOrdersByDate", viewOrders);
orderRouter.get("/getAllOrders", getAllOrders);

module.exports = orderRouter;
