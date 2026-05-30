const User=require("../models/User");
const jwt=require("jsonwebtoken");
const BlackList=require("../models/BlackListing");

async function authUserMiddleware(req,res,next){
 try {
     const token=req.cookies.token;
     if(!token){
        return res.status(401).json("The token does not exist");
     }
     const checkBlackList=await BlackList.findOne({
        token:token
     });
     if(checkBlackList){
        return res.status(401).json("The token is in the Black List");
     }
     const decode=jwt.verify(token,process.env.JWT_SECRET_KEY);
     const user=await User.findById(decode.userID);
     if(!user){
        return res.status(401).json("The User not found");
     }

     req.user=user;
     return next();
 } catch (error) {
     return res.status(401).json("Unauthorized or invalid token");
 }
}
module.exports={authUserMiddleware};