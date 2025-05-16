const mongoose = require("mongoose");
const emailMarketingSchema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "* Email is required"],
      trim: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("emailMarketingModel", emailMarketingSchema);
