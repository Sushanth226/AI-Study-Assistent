const express=require("express");
const router=express.Router();
const userController=require("../controllers/User.js");
const authUserMiddleware=require("../middleware/authMiddleware.js");
router.post("/register",userController.register);
router.post("/login",userController.login);
router.post("/logout",authUserMiddleware.authUserMiddleware,userController.logout);
module.exports=router;