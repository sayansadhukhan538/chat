const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("<H1>This is Our Chat Application...</H1>");
});
app.listen(PORT, () => {
  console.log(`server is running at port number ${PORT}`);
});
