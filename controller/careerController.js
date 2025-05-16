const careerModel = require("../model/careerModel");
const careerValidationSchema = require("../validation/careerValidation");
const {
  firmTemplate,
  userTemplate,
} = require("../emailTemplate/careerEmailTemplate");
const { sendMail } = require("../utils/sendMail");

const addApplication = async (req, res) => {
  try {
    const firm_mail = process.env.email;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume is required",
      });
    }

    const {
      name,
      position,
      email,
      contact_number,
      experience,
      expectedCtc,
      currentCtc,
      joiningPeriod,
      message,
    } = req.body;

    // Validate input
    const { error } = careerValidationSchema.validate({
      name,
      position,
      email,
      contact_number,
      experience,
      expectedCtc,
      currentCtc,
      joiningPeriod,
    });

    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validation Error Occurred",
        error: error.details,
      });
    }
    let isEmailAlreadyExist = await careerModel.findOne({ email });
    if (isEmailAlreadyExist) {
      return res
        .status(400)
        .json({ isSuccess: false, message: "Email Already Exist" });
    }
    // Save to MongoDB
    const newApplication = new careerModel({
      name,
      position,
      email,
      contact_number,
      experience,
      expectedCtc,
      currentCtc,
      message,
      joiningPeriod,
    });

    const isAdded = await newApplication.save();
    if (!isAdded) {
      return res.status(400).json({
        success: false,
        message: "Error While Saving Application",
      });
    }

    // Send emails concurrently

    res.status(200).json({
      success: true,
      message: "Application Submitted Successfully",
    });
    await Promise.all([
      await sendMail(
        firm_mail,
        firm_mail,
        "New Application Receieved",
        firmTemplate(req.body),
        [
          {
            filename: req.file.originalname,
            content: req.file.buffer,
          },
        ]
      ),
      await sendMail(
        firm_mail,
        email,
        "Thank You ",
        userTemplate({ ...req.body, subject: "Thank You " })
      ),
    ]);
  } catch (error) {
    console.error("Error in addApplication:", error);
    if (!res.headersSent) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }
};

const getAllApplication = async (req, res) => {
  try {
    let allApplication = await careerModel.find({});
    return res.status(200).json({
      isSuccess: true,
      message: "All Application Finded Successfully ",
      allApplication,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ isSuccess: false, message: "Internal Server Error" });
  }
};
module.exports = { getAllApplication, addApplication };
