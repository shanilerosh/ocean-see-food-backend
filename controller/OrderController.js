const socket = require("..");
const OrderDTO = require("../model/OrderDTO");
const orderRouter = require("../route/OrderRouter");

const placeOrder = (req, res) => {
  const order = new OrderDTO({
    requiredDate: req.body.requiredDate,
    items: req.body.items,
    customer: req.body.customer,
    user: req.body.user,
    orderTotal: req.body.total,
    orderDate: new Date(),
    status: "pending",
  });

  order
    .save()
    .then((all) => {
      res.status(200).json({ isDone: true, data: all });
    })
    .catch((err) => {
      res.status(200).json({ isDone: false, data: err });
    });
};

const getAllOrders = (req, res) => {
  OrderDTO.find()
    .then((data) => {
      res.status(200).json({ isDone: true, data });
    })
    .catch((err) => {
      res.status(200).json({ isDone: true, err });
    });
};

const viewOrders = (req, res) => {
  OrderDTO.find({
    orderDate: {
      $gte: new Date(req.query.dateFrom),
      $lt: new Date(req.query.dateTo),
    },
    "user.userId": req.query.userId,
  })
    .then((data) => {
      res.status(200).json({ isDone: true, data });
    })
    .catch((err) => {
      res.status(200).json({ isDone: true, err });
    });
};

module.exports = {
  placeOrder,
  viewOrders,
  getAllOrders,
};
