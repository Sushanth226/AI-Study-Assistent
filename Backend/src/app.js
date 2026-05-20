const express=require("express");
const cookieParser=require("cookie-parser");
const app=express();
const authRouter=require("./routers/auth");
app.use(express.json());
app.use(cookieParser());
app.use("/auth",authRouter);

module.exports=app;