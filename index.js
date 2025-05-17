const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");


require("dotenv").config();
require("./dbconfig.js");
const contactRoutes = require("./routes/contactRoutes");
const adminRoutes = require("./routes/adminRoutes");
const careerRoutes = require("./routes/careerRoutes.js");
const quoteRoutes = require("./routes/quoteRoutes.js");
const emailMarketingRoutes = require("./routes/emailMarketingRoutes.js");

const PORT = process.env.port;
const app = express();
console.log("this is frontend url ",process.env.front_end_url)
app.use(
  cors({
    origin: ["https://abtikdigital.com"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/contact", contactRoutes);
app.use("/admin", adminRoutes);
app.use("/career", careerRoutes);
app.use("/quote", quoteRoutes);
app.use("/emailMarketing", emailMarketingRoutes);
app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});
app.listen(PORT, () => {
  console.log(`PORT IS RUNNING ${PORT}`);
});
