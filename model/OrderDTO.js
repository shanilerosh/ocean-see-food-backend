const mongoose = require("mongoose");
const OrderDTO = mongoose.Schema({
  requiredDate: {
    type: Date,
    required: true,
  },
  items: [
    {
      itemId: String,
      itemName: String,
      itemPrice: Number,
      itemQty: Number,
    },
  ],
  customer: {
    id: String,
    customerName: String,
  },
  user: {
    userId: String,
    userName: String,
  },
  orderDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Order", OrderDTO);
