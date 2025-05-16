const contactModel = require("../model/contactModel");
const { contactValidationSchema } = require("../validation/contactValidation");
const { sendMail } = require("../utils/sendMail");
const {
  userTemplate,
  firmTemplate,
} = require("../emailTemplate/contactEmailTemplate");


const firmMail = process.env.email;
const getContactDetails = async (req, res) => {
  try {
    let allContactDetails = await contactModel.find();
    return res.status(200).json({
      isSuccess: true,
      message: "Contact Details Founded Successfully",
      allContactDetails,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ isSuccess: false, message: "Internal Server Error", error });
  }
};

const addContactDetails = async (req, res) => {
  try {
    let { error, value } = contactValidationSchema.validate(req.body);
    if (error) {
      return res
        .status(403)
        .json({ isSuccess: false, message: "Validation Error Occured", error });
    }
    const { name, email, number, message } = req.body;
    let isEmailAlreadyExist = await contactModel.findOne({ email });
    if (isEmailAlreadyExist) {
      return res
        .status(409)
        .json({ isSuccess: false, message: "Email Already Exist" });
    }
    let isNumberAlreadyExist = await contactModel.findOne({ number });
    if (isNumberAlreadyExist) {
      return res
        .status(409)
        .json({ isSuccess: false, message: "Number is Already Exist " });
    }

    let newContact = new contactModel({ name, email, number, message });
    let isAdded = await newContact.save();

    if (isAdded && Object.keys(isAdded).length != 0) {
      const userSubject = "Thank You For Contacting Abtiik-digital";
      const firmSubject = "New Contact Form Submission";

      res.status(201).json({
        isSuccess: true,
        message: "Contact Details Added Successfully",
      });

      await Promise.all([
        sendMail(firmMail, email, userSubject, userTemplate(req.body)),
        sendMail(firmMail, firmMail, firmSubject, firmTemplate(req.body)),
      ]);

     
    } else {
      return res.status(400).json({
        isSuccess: false,
        message: "Error While Inserting Contact Details",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ isSuccess: false, message: "Internal Server Error", error });
  }
};

module.exports = { addContactDetails, getContactDetails };
