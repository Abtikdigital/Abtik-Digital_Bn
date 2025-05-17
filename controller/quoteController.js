if (process?.env?.NODE_ENV !== "production") {
  require("dotenv").config();
}
// require('dotenv').config();
const quoteModel = require("../model/quoteModel");
const quoteValidationSchema = require("../validation/quoteValidation");
const { sendMail } = require("../utils/sendMail");
const {
  firmTemplate,
  userTemplate,
} = require("../emailTemplate/quoteEmailTemplate");
const addQuote = async (req, res) => {
  try {
    let { name, email, phoneNumber, companyType, additionalInfo, service } =
      req.body;
    let { error, values } = quoteValidationSchema.validate({
      name,
      email,
      phoneNumber,
      companyType,
      service,
    });
    const firmMail = process.env.email;

    if (error) {
      return res
        .status(400)
        .json({ isSuccess: false, message: "Validation Error", error });
    }
    let isEmailAlreadyExist = await quoteModel.findOne({ email });
    if (isEmailAlreadyExist) {
      return res
        .status(400)
        .json({ isSuccess: false, message: "Email Is Already Exist" });
    }
    let newQuote = new quoteModel({ ...req.body });
    const isAdded = await newQuote.save();
    if (isAdded) {
      let userSubject = "Thank You for Requesting a Quote from Abtik-Digital";
      let adminSubject = "New Quote Request Received";
      res
        .status(201)
        .json({ isSuccess: true, message: "Quote Added Successfully" });
      await Promise.all[
        (await sendMail(firmMail, email, userSubject, userTemplate(req.body)),
        await sendMail(
          firmMail,
          firmMail,
          adminSubject,
          firmTemplate(req.body)
        ))
      ];
      return;
    } else {
      return res
        .status(400)
        .json({ isSuccess: false, message: "Error While Inserting Quote" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ isSuccess: false, message: "Internal Server Error", error });
  }
};
const getAllQuotes = async (req, res) => {
  try {
    const allQuotes = await quoteModel.find({});
    return res.status(200).json({ isSuccess: true, allQuotes });
  } catch (error) {
    return res
      .status(500)
      .json({ isSuccess: false, message: "Internal Server Error", error });
  }
};
const getQuoteById = async (req, res) => {
  try {
    let quoteId = req.params.quoteId;
    if (!quoteId) {
      return res
        .status(400)
        .json({ isSuccess: false, message: "Id Not Found" });
    }
    let quote = await quoteModel.findOne({ _id: quoteId });
    if (!quote) {
      return res
        .status(404)
        .json({ isSuccess: false, message: "Data Not Found" });
    }
    return res.status(200).json({ isSuccess: true, quote });
  } catch (error) {
    return res
      .status(500)
      .json({ isSuccess: false, message: "Internal Server Error", error });
  }
};

module.exports = { addQuote, getAllQuotes, getQuoteById };
