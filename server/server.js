const express = require("express");
const app = express();
const dbConnect = require("./config/dbConnect");
require("dotenv").config();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("<H1>This is Our Chat Application...</H1>");
});
app.listen(PORT, () => {
  console.log(`server is running at port number ${PORT}`);
});
dbConnect();
