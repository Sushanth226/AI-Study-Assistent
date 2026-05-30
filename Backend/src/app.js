const express=require("express");
const cookieParser=require("cookie-parser");
const cors=require("cors");
const app=express();
const authRouter=require("./routers/auth");
const pdfRouter=require("./routers/pdf");
const assistantPracticeRouter=require("./routers/assistantPractice");
app.use(cors({
    origin: "http://localhost:5173", // Assuming default Vite port, update if different
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/auth",authRouter);
app.use("/pdf",pdfRouter);
app.use("/assistantPractice",assistantPracticeRouter);
app.use("/",(req,res)=>{
    return res.status(404).json("The requested link is not there.");
})

// Global Error Handler to catch middleware errors (like Multer limits) and send JSON instead of HTML
app.use((err, req, res, next) => {
    console.error("Global Error:", err.message);
    res.status(500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
});

module.exports=app;