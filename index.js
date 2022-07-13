const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://operat8009:qwer1234@help.rwjeip0.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected.."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("hello"));
app.listen(port, () => console.log(`example app listening on port ${port}!`));
