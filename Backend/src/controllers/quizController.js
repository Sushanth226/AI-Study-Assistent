const processPDF = require("../services/pdfProcessing");

const generateQuiz = require("../services/quizService");

const quizController = async (req, res) => {

  try {

    const { pdfUrl } = req.body;

    // Process PDF
    const { vectorStore } = await processPDF(pdfUrl);

    // Create retriever
    const retriever = vectorStore.asRetriever();

    // Generate Quiz
    const quiz = await generateQuiz(retriever);

    res.status(200).json({
      success: true,
      quiz,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  quizController
};