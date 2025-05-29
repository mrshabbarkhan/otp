const verifyOtp = (req, res, next) => {
  console.log("hello verified");
  next();
};

module.exports = verifyOtp;
