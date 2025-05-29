const otpController = (req, res) => {
  const otp = Math.floor(Math.random() * 9999);
  res.send(`your otp is ${otp} valid till 5 minutes`);
};

module.exports = {
  otpController,
};
