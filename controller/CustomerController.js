const CustomerDTO = require("../model/CustomerDTO");
const socket = require("../socket");

const saveCustomer = (req, res) => {
  CustomerDTO.findOne({ customerName: req.body.customerName })
    .then((data) => {
      if (data) {
        res.status(200).json({
          isDone: false,
          data: "Customer with this name Already exist",
        });
      } else {
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
      }
    })
    .catch((err) => {
      res.status(200).json({ isDone: false, darta: err });
    });
};

const findAllCustomers = (req, res) => {
  CustomerDTO.find()
    .then((all) => {
      res.status(200).json({ isDone: true, data: all });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
};

const deleteCustomer = (req, res) => {
  CustomerDTO.findByIdAndDelete(req.params)
    .then((data) => {
      if (data) {
        res.status(200).json({ isDone: true, data });
      } else {
        res.status(200).json({ isDone: false, data: "Please try again" });
      }
    })
    .catch((err) => {
      res.status(200).json({ isDone: false, data: "Please try again" });
    });
};

const updateCustomer = (req, res) => {
  console.log(req.body);
};

module.exports = {
  saveCustomer,
  findAllCustomers,
  deleteCustomer,
  updateCustomer,
};
