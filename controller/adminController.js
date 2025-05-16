const adminModel = require("../model/adminModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { sendMail } = require("../utils/sendMail");
const {
  resetPasswordTemplate,
} = require("../emailTemplate/contactEmailTemplate");

if (process?.env?.NODE_ENV !== 'production') {
  require('dotenv').config();
}


const adminLogin = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ isSuccess: false, message: "Invalid Data" });
    }
    let secretKey = process.env.secret_key;
    let isAdminExist = await adminModel.findOne({ email });
    if (!isAdminExist) {
      return res
        .status(401)
        .json({ isSuccess: false, message: "Admin Not Found" });
    }
    let hashPassword = isAdminExist.password;
    let isPasswordMatch = bcrypt.compareSync(password, hashPassword);
    if (!isPasswordMatch) {
      return res
        .status(401)
        .json({ isSuccess: false, message: "Invalid Credentials" });
    }
    let authToken = jwt.sign({ _id: isAdminExist._id }, secretKey);
    res.cookie("authToken", authToken);
    return res
      .status(200)
      .json({ isSuccess: true, message: "User Login Successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ isSuccess: false, message: "Internal Server Error" });
  }
};
const adminForgetPassword = async (req, res) => {
  try {
    let firmMail = process.env.email;
    let { email } = req.body;
    let fronEndUrl = process.env.front_end_url;
    let secretKey = process.env.secret_key;
    if (!email) {
      return res
        .status(400)
        .json({ isSuccess: false, message: "Invalid Email" });
    }
    let isEmailExist = await adminModel.findOne({ email });
    if (!isEmailExist) {
      return res
        .status(404)
        .json({ isSuccess: false, message: "Admin Not Found" });
    }
    let token = jwt.sign({ _id: isEmailExist._id }, secretKey, {
      expiresIn: "30m",
    });
    let generatedUrl = `${fronEndUrl}/resetPassword?token=${token}`;
    let subject = "Here’s the Link to Reset Your Abtik-Digital Password";
 
    sendMail(
      firmMail,
      email,
      subject,
      resetPasswordTemplate({
        name: isEmailExist?.name,
        resetLink: generatedUrl,
      })
    );
    await adminModel.updateOne(
      { _id: isEmailExist._id },
      { $set: { resetTokenUsed: false } }
    );

    return res.status(200).json({
      isSuccess: true,
      message: "Resent Link Has been Sended Successfully To Your Mail",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ isSuccess: false, message: "Internal Server Error" });
  }
};
const adminResetPassword = async (req, res) => {
  try {
    let secretKey = process.env.secret_keys;
    let token = req.params.token;
    let newPassword = req.body.password;

    if (!token) {
      return res.status(400).json({ isSuccess: false });
    }
    let deocdedToken;

    try {
      deocdedToken = jwt.verify(token, secretKey);
    } catch (error) {
      return res
        .status(401)
        .json({ isSuccess: false, message: "Invalid Token" });
    }

    let isValidEmail = await adminModel.findOne({ _id: deocdedToken._id });
    if (isValidEmail.resetTokenUsed) {
      return res
        .status(400)
        .json({ isSuccess: false, message: "Link Already Being Used" });
    }
    if (!isValidEmail) {
      return res
        .status(400)
        .json({ isSuccess: false, message: "Invalid Email" });
    }
    let hashPassword = bcrypt.hashSync(newPassword, 10);

    let isPasswordUpdated = await adminModel.updateOne(
      { _id: deocdedToken._id },
      { $set: { password: hashPassword } }
    );
    if (isPasswordUpdated) {
      await adminModel.updateOne(
        { _id: deocdedToken._id },
        { $set: { resetTokenUsed: true } }
      );
      return res
        .status(200)
        .json({ isSuccess: true, message: "Password Updated Successfully" });
    } else {
      return res.status(400).json({
        isSuccess: false,
        message: "Error While Updating the Password",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ isSuccess: false, message: "Internal Server Error" });
  }
};
const adminLogout = async (req, res) => {
  try {
    res.clearCookie("authToken");
    return res
      .status(200)
      .json({ isSuccess: true, message: "Admin Logout Successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ isSuccess: false, message: "Internal Server Error" });
  }
};
const adminProfile = async (req, res) => {
  try {
    let authToken = req.cookies.authToken;
    let secretKey = process.env.secret_keys;
    if (!authToken) {
      return res
        .status(401)
        .json({ isSuccess: false, message: "Admin Not Found" });
    }
    let deocdedToken;
    try {
      deocdedToken = jwt.verify(authToken, secretKey);
    } catch (error) {
      return res
        .status(401)
        .json({ isSuccess: false, message: "Invalid Token" });
    }

    let isEmailExist = await adminModel
      .findOne({ _id: deocdedToken._id })
      .select("-password");
    if (!isEmailExist) {
      return res
        .status(404)
        .json({ isSuccess: false, message: "Admin Not Found" });
    }
    return res.status(200).json({
      isSuccess: true,
      message: "Admin Profile Data Has Has Been Finded",
      data: isEmailExist,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ isSuccess: false, message: "Internal Server Error" });
  }
};
module.exports = {
  adminLogin,
  adminForgetPassword,
  adminResetPassword,
  adminLogout,
  adminProfile,
};
