const express=require("express");
const router=express.Router();
const multerMiddleware=require("../middleware/multerMiddleware");
const {uploadPdf,getAllPdfs,deletePdf}=require("../controllers/pdfContoller");
const authMiddleware=require("../middleware/authMiddleware");

router.post("/upload", authMiddleware.authUserMiddleware, multerMiddleware.single("pdf"), uploadPdf);
router.get("/getPdfs", authMiddleware.authUserMiddleware, getAllPdfs);
router.delete("/deletePdf/:id", authMiddleware.authUserMiddleware, deletePdf);

module.exports=router;
