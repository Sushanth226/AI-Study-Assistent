const jwt =require("jsonwebtoken");
const User=require("../models/User");

async function register(req,res){

  const{name,email,password}=req.body;
  try{
  const user=await User.create({
    name:name,
    email:email,
    password:password
  });
  const token=jwt.sign(
    {userID:user._id},
    process.env.JWT_SECRET_KEY,
    {expireIn:"2h"}
  );
  console.log("token");
  res.cookie("token",token);
  return res.status(200).json(`Token created:${token}`);
  }catch(error){
    return res.status(400).json(error);
  }
}

async function login(res,req){
   const {email,password}=req.body;
   try{
     const user=await User.findOne({email:email}).select("+password");
     if(!user){
        return res.status(400).json("The user does not exist");
     }
     const isMatch=user.comparePassword(password);
     if(!isMatch){
        return res.status(400).json("The password (or) email is wrong"); 
     }
     const token=jwt.sign(
    {userID:user._id},
    process.env.JWT_SECRET_KEY,
    {expireIn:"2h"}
  );
  console.log("token");
  res.cookie("token",token);
  return res.status(200).json(`Token created:${token}`);
 
   }catch(error){
    return res.status(400).json(error);
   }
}
module.exports={register,login};
