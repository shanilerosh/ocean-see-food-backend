const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const itemRouter = require("./route/ItemRouter");
const userRouter = require("./route/UserRouter");
const customrRouter = require("./route/CustomerRouter");
const orderRouter = require("./route/OrderRouter");
const app = express();
const socket = require("socket.io");
const port = process.env.PORT || 1234;

// MiddleWear
app.use(cors());
app.use(bodyParser.json());
app.get("/", function (req, res) {
  res.send("Hello");
});

mongoose
  .connect("mongodb://localhost:27017/oceanseafood", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((result) => {
    let server = app.listen(port, () => {
      console.log("listenin at http://localhost:1234");
    });
    const io = socket(server);
    io.on("connection", (s) => {
      console.log("Connected");
      s.on("placeOrder", (data) => {
        s.broadcast.emit("broadcast", data);
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/v1/item", itemRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/customer", customrRouter);
app.use("/api/v1/order", orderRouter);
