const ItemDTO = require("../model/ItemDTO");

const saveItem = (req, res) => {
  const item = new ItemDTO({
    itemName: req.body.itemName,
    itemPrice: req.body.itemPrice,
  });

  item
    .save()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
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
