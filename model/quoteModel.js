const mongoose = require("mongoose");

const quoteModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "* Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "* Email is required"],
      trim: true,
      lowercase: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: [true, "* Phone number is required"],
    },
    service: {
      type: String,
      required: [true, "* Service is required"],
      enum: [
        "web-development",
        "graphic-design",
        "seo",
        "digital-marketing",
        "other",
        "uiux"
      ],
    },
    companyType: {
      type: String,
      required: [true, "* Company Type is required"],
      enum: [
        "LLP (Limited Liability Partnership)",
        "Private Limited Company (Pvt Ltd)",
        "Public Limited Company (PLC)",
        "One Person Company (OPC)",
        "Section 8 Company / Non-Profit",
        "Other",
      ],
    },
    additionalInfo: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("quoteModel", quoteModel);
