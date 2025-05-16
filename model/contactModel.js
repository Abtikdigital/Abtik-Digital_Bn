const mongoose = require("mongoose");
const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "* Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "* Email is required"],
      lowercase: true,
  unique: true,
      trim:true
    },
    number: {
      type: Number,
      required: [true, "* Number is required"],
    },
    message: {
      type: String,
      required: [true, "* Message is required"],
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("contactModel", contactSchema);
