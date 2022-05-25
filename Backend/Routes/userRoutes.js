const express = require("express");
const {
  userRegister,
  userLogin,
  userData,
} = require("../Controller/userController");
const protect = require("../Middleware/authToken");
const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/me", protect, userData);

module.exports = router;
