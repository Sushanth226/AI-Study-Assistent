const express=require("express");
const router=express.Router();
const authMiddleware=require("../middleware/authMiddleware");
const summarizeController=require("../controllers/summarizeController");
const quizController=require("../controllers/quizController");

//summarize
router.post("/summarize/",authMiddleware.authUserMiddleware,summarizeController.summarizePDF);

//quiz generator
router.post("/quiz/",authMiddleware.authUserMiddleware,quizController.quizController);

module.exports=router;