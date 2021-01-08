const express = require("express");
const { placeOrder, viewOrders } = require("../controller/OrderController");
const orderRouter = express.Router();

orderRouter.post("/placeorder", placeOrder);
orderRouter.get("/getOrdersByDate", viewOrders);

module.exports = orderRouter;
