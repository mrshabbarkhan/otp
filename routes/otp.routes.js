const express = require("express");
const { otpController } = require("../controller/otp.controller");

const route = express.Router();

route.get("/otp", otpController);

module.exports = route;
