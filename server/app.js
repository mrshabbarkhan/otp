const express = require("express");
const app = express();

const port = 8000;
app.listen(port, () => {
  console.log("server started");
});

app.get("/", (req, res) => {
  res.send("hey your server started");
});

app.get("/otp", (req, res) => {
  const otp = Math.floor(Math.random() * 9999);
  res.send(`your otp is ${otp} valid till 5 minutes`);
});
