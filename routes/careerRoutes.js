const express=require("express")
const { isAuth } = require("../middleware/isAuth")
const { getAllApplication, addApplication } = require("../controller/careerController")
const upload=require("../utils/multer")
const Router=express.Router()
Router.get("/getAllApplication",isAuth,getAllApplication)
Router.post("/addApplication",upload.single("resume"),addApplication)


module.exports=Router