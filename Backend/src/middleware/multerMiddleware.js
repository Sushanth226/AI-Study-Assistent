const multer=require("multer");
const storage=multer.memoryStorage();
const fileFilter=(req,file,cb)=>{
    if(file.mimetype==="application/pdf"){
        cb(null,true);
    }else{
        cb(new Error("Only PDFs allowed"),false);
    }
};

const upload=multer({
    storage,
    fileFilter,
    limits:{
        fileSize:20*1024*1024 // Increased limit to 20MB
    }
})

module.exports=upload;