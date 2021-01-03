const CustomerDTO = require("../model/CustomerDTO");

const saveCustomer = (req, res) => {
  CustomerDTO.findOne({ customerName: req.body.customerName })
    .then((data) => {
      if (data) {
        res.status(200).json({
          isDone: false,
          data: "Customer with this name Already exist",
        });
        return;
      }
    })
    .catch((err) => {
      res.status(200).json({ isDone: false, darta: err });
    });

  const customer = new CustomerDTO({
    customerName: req.body.customerName,
    customerAddress: req.body.customerAddress,
    customerMobile: req.body.customerMobile,
    customerNIC: req.body.customerNIC,
  });

  customer
    .save()
    .then((data) => {
      res.status(200).json({ isDone: true, data });
    })
    .catch((err) => {
      res.status(200).json({ isDone: false, data: err });
    });
};

const findAllCustomers = (req, res) => {
  ItemDTO.find()
    .then((all) => {
      res.status(200).json({ isDone: true, data: all });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
};

module.exports = {
  saveCustomer,
  findAllCustomers,
};
