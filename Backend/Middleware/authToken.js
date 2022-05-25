const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const userModel = require("../Model/userModel");
const { nextTick } = require("process");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // check there is a auth and if there is a token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    //Get the Token
    token = req.headers.authorization.split(" ")[1];

    //Verify Token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    //Get user from the token and select everything except password
    req.user = await userModel.findById(decodedToken.id).select("-password");

    next();
  } else {
    res.status(400);
    throw new Error("No Authorization");
  }

  if (!token) {
    res.status(400);
    throw new Error("No Authorization, No Token");
  }
});

module.exports = protect;
