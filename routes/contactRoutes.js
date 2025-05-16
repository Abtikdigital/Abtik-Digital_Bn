const express = require("express");
const Router = express.Router();
const {isAuth}=require("../middleware/isAuth")
const {
  getContactDetails,
  addContactDetails,
} = require("../controller/contactController");

Router.get("/getAllContactDetails",isAuth,  getContactDetails);
Router.post("/addContactDetails",  addContactDetails);

module.exports = Router;
