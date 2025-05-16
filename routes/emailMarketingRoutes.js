const express=require("express")
const {addEmail}=require("../controller/emailMarketingController")
const Router=express.Router()

Router.post("/addEmail",addEmail)
module.exports=Router
