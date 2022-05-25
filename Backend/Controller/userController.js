const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const userModel = require("../Model/userModel");

const userRegister = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //Check if all input is filled

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Fill all the Input Field");
  }

  //Check user existance via Email
  const userExist = await userModel.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User Already Exist");
  }

  //Hash the Passoword
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const registeredUser = await userModel.create({
    name,
    email,
    password: hashedPass,
  });

  if (registeredUser) {
    res.status(201).json({
      _id: registeredUser.id,
      name: registeredUser.name,
      email: registeredUser.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Creadentials");
  }
});

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
