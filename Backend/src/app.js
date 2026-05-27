const express=require("express");
const cookieParser=require("cookie-parser");
const app=express();
const authRouter=require("./routers/auth");
const pdfRouter=require("./routers/pdf");
const assistantPracticeRouter=require("./routers/assistantPractice");
app.use(express.json());
app.use(cookieParser());
app.use("/auth",authRouter);
app.use("/pdf",pdfRouter);
app.use("/assistantPractice",assistantPracticeRouter);
app.use("/",(req,res)=>{
    return res.status(400).json("The requested link is not there.");
})
module.exports=app;