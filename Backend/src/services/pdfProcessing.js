const axios = require("axios");

const extractText =
require("../util/extractText");

const splitText =
require("../util/chunkText");

const createVectorStore =
require("../langchain/vectorStore");

const processPDF = async (pdfUrl) => {

  // Download PDF
  const response = await axios.get(pdfUrl, {
    responseType: "arraybuffer",
  });

  // Extract text
  const text = await extractText(response.data);

  // Split chunks
  const chunks = await splitText(text);

  // Vector DB
  const vectorStore =
    await createVectorStore(chunks);

  return {
    text,
    chunks,
    vectorStore,
  };
};

module.exports = processPDF;