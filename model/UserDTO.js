const mongoose = require("mongoose");
const UserDTO = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  monthlyTarget: {
    type: Number,
  },
  state: {
    type: String,
  },
});

module.exports = mongoose.model("user", UserDTO);
