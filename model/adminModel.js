const mongoose = require("mongoose");

const adminModel = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "* Name is required"],
    },
    email: {
      type: String,
      lowerCase: true,
      unique: true,
      required: [true, "* Email is required"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "* Password is required"],
    },
    resetTokenUsed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("adminModel", adminModel);
