const express=require("require");
const router=express.router;

router.post("/register",userController.register);
router.post("/login",userController.login);
module.exports=router;