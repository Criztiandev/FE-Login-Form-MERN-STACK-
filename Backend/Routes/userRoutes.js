const express = require("express");
const {
  userRegister,
  userLogin,
  userData,
} = require("../Controller/userController");
const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/me", userData);

module.exports = router;
