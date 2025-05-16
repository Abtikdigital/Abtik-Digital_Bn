const express = require("express");
const Router = express.Router();
const {
  getAllQuotes,
  getQuoteById,
  addQuote,
} = require("../controller/quoteController");
const { isAuth } = require("../middleware/isAuth");
Router.get("/getAllQuotes", isAuth, getAllQuotes);
Router.get("/getQuoteById/:quoteId", isAuth, getQuoteById);
Router.post("/addQuote", addQuote);
module.exports = Router;
