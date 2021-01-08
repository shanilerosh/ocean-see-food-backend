const express = require("express");
const {
  saveCustomer,
  findAllCustomers,
  deleteCustomer,
  updateCustomer,
} = require("../controller/CustomerController");
const customrRouter = express.Router();

customrRouter.post("/saveCustomer", saveCustomer);
customrRouter.get("/findAllCustomers", findAllCustomers);
customrRouter.delete("/deleteCustomer/:_id", deleteCustomer);
customrRouter.put("/updateCustomer", updateCustomer);

module.exports = customrRouter;
