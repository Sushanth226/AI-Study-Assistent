const mongoose=require("mongoose");

const pdfSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    originalName:{
        type:String,
        required:true
    },
    pdfUrl:{
        type:String,
        required:true,
        unique:true
    },
    publicId:{
        type:String,
        required:true,
        unique:true
    },
    fileSize:{
        type:Number,
        required:true
    }

},{
    timestamps:true
});

const Pdf=mongoose.model("Pdf",pdfSchema);
module.exports=Pdf;