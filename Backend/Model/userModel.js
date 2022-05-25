const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please Enter Your Name"],
    },

    email: {
      type: String,
      require: [true, "Please Enter Your Email"],
      unique: true,
    },

    password: {
      type: String,
      require: [true, "Please Enter Your Password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
