const asyncHandler = require("express-async-handler");

const userRegister = asyncHandler(async (req, res) => {});

const userLogin = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Your Login",
  });
});

const userData = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Your Data",
  });
});

module.exports = { userRegister, userLogin, userData };
