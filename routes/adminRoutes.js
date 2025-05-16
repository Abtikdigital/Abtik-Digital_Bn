const express = require("express");
const Router = express.Router();
const {
  adminLogin,
  adminForgetPassword,
  adminProfile,
  adminLogout,
  adminResetPassword,
} = require("../controller/adminController.js");
const { isAuth } = require("../middleware/isAuth.js");
Router.post("/login", adminLogin);
Router.post("/forgetPassword", adminForgetPassword);
Router.get("/profile",isAuth,  adminProfile);
Router.delete("/logout",isAuth, adminLogout);
Router.put("/resetPassword/:token", adminResetPassword);

module.exports = Router;
