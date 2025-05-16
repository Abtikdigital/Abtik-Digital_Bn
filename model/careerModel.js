const Mongoose = require("mongoose");

const careerSchema = Mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "* Name Is Required"],
      trim: true,
    },
    position: {
      type: String,
      required: [true, "* Position Is Required"],
    },
    email: {
      type: String,
      required: [true, "* Email Is Required"],
      lowercase: true,
      trim: true,
      unique: true,
      index: true, // Explicitly create an index
    },
    contact_number: {
      type: Number,
      required: [true, "* Contact Number Is Required"],
    },
    experience: {
      type: String,
      required: [true, "* Experiance Is Required"],
    },
    expectedCtc: {
      type: String,
      required: [true, "* Expected Ctc Is Required"],
    },
    currentCtc: {
      type: String,
      required: [true, "* Current Ctc Is Required"],
    },
    joiningPeriod: {
      type: String,
      required: [true, "* Joining Period Is Required"],
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("careerModel", careerSchema);
