const emailMarketingModel = require("../model/emailMarketingModel");
const { sendMail } = require("../utils/sendMail");
const {
  userMarketingTemplate,
  firmMarketingTemplate,
} = require("../emailTemplate/emailMarketingTemplate");
const addEmail = async (req, res) => {
  try {
    const firmMail = process.env.email;
    let { email } = req.body;
    if (!email) {
      return res
        .status(400)
        .json({ isSuccess: false, message: "* Please Provide Email" });
    }
    let isEmailAlreadyExist = await emailMarketingModel.findOne({ email });
    if (isEmailAlreadyExist) {
      return res
        .status(400)
        .json({ isSuccess: false, message: "Email Is Already Exist" });
    }
    let newEmail = new emailMarketingModel({ email });
    let isAdded = await newEmail.save();
    if (isAdded) {
      res.status(201).json({
        isSuccess: true,
        message: "Thank You For Subscribing Abtik Digital ",
      });
      await Promise.all([
        await sendMail(
          firmMail,
          email,
          "Thank you for Subscribing Abtik Digital ",
          userMarketingTemplate(req.body)
        ),
        await sendMail(
          firmMail,
          firmMail,
          "New Subscriber ",
          firmMarketingTemplate(req.body)
        ),
      ]);
    } else {
      return res
        .status(400)
        .json({ isSuccess: false, message: "Error While Inserting Email" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ isSuccess: false, message: "Internal Server Error", error });
  }
};

module.exports = { addEmail };
