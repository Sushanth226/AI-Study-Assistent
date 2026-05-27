const processPDF =
require("../services/pdfProcessing");

const summarizeChunks =
require("../services/summarizeService");

const summarizePDF = async (req, res) => {

  try {

    const { pdfUrl } = req.body;

    // Process PDF
    const { chunks } =
      await processPDF(pdfUrl);

    // Generate Summary
    const summary =
      await summarizeChunks(chunks);

    res.status(200).json({
      success: true,
      summary,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  summarizePDF,
};