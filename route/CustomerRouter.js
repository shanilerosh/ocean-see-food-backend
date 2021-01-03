const express = require("express");
const {
  saveCustomer,
  findAllCustomers,
} = require("../controller/CustomerController");
const customrRouter = express.Router();

customrRouter.post("/saveCustomer", saveCustomer);
customrRouter.get("/findAllCustomers", findAllCustomers);

module.exports = customrRouter;
