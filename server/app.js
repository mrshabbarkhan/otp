const express = require("express");
const verifyOtp = require("../middleware/otp.middleware");
const app = express();
const port = 8000;
app.listen(port, () => {
  console.log(`your server started on http://localhost:${port}`);
});

app.use("/verify", verifyOtp, require("../routes/otp.routes"));

app.get("/", (req, res) => {
  res.send("hey your server started");
});
