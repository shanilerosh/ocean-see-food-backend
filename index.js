const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const itemRouter = require("./route/ItemRouter");
const userRouter = require("./route/UserRouter");
const customrRouter = require("./route/CustomerRouter");
const app = express();

// MiddleWear
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
    app.listen(1234, () => {
      console.log("listenin at http://localhost:1234");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/v1/item", itemRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/customer", customrRouter);
