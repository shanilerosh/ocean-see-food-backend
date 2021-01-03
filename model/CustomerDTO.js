const mongoose = require("mongoose");
const CustomerDTO = mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  customerAddress: {
    type: String,
    required: true,
  },
  customerMobile: {
    type: String,
    required: true,
  },
  customerNIC: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("customer", CustomerDTO);
