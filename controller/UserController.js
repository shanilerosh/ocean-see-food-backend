const UserDTO = require("../model/UserDTO");
const bcrypt = require("bcrypt");

const saveUser = (req, res) => {
  //   Check for duplicate user
  UserDTO.findOne({ username: req.body.username }).then((data) => {
    if (data) {
      res.status(200).json({ isDone: false, data: "User already exist" });
    }
  });
  bcrypt
    .hash(req.body.password, 5)
    .then((pass) => {
      const user = new UserDTO({
        username: req.body.username,
        role: req.body.role,
        montlyTarget: req.body.monthlyTarget,
        password: pass,
        state: req.body.state,
      });

      user
        .save()
        .then((data) => {
          res.status(200).json({ isDone: true, data });
        })
        .catch((err) => {
          res.status(500).json({ err });
        });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
};

const checkuser = (req, res) => {
  console.log(req.body.username);
  UserDTO.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        res.status(200).json({ isDone: false, data: "User Doesn't Exist" });
      } else {
        bcrypt.compare(req.body.password, user.password).then((result) => {
          result
            ? res
                .status(200)
                .json({ isDone: true, data: "Successfully Loged Id", user })
            : res.status(200).json({ isDone: false, data: "Wrong Password" });
        });
      }
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
};

const checkAdmin = (req, res) => {
  UserDTO.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        res.status(200).json({ isDone: false, data: "User Doesn't Exist" });
      } else if (user.role != "admin") {
        res.status(200).json({ isDone: false, data: "You are not an admin" });
      } else {
        bcrypt.compare(req.body.password, user.password).then((result) => {
          result
            ? res.status(200).json({
                isDone: true,
                data: `Welcome ${user.username}! Successfully Loged Id`,
              })
            : res.status(200).json({ isDone: false, data: "Wrong Password" });
        });
      }
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
};

module.exports = {
  saveUser,
  checkuser,
  checkAdmin,
};
