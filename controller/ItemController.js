const ItemDTO = require("../model/ItemDTO");

const saveItem = (req, res) => {
  const item = new ItemDTO({
    itemName: req.body.itemName,
    itemPrice: req.body.itemPrice,
  });

  item
    .save()
    .then((data) => {
      res.status(200).json({ isDone: true, data });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
};

const findItems = (req, res) => {
  ItemDTO.find()
    .then((all) => {
      res.status(200).json({ isDone: true, data: all });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
};

module.exports = {
  saveItem,
  findItems,
};
