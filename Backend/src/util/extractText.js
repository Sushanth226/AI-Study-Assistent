const { GoogleGenerativeAI } = require("@google/generative-ai");

const extractText = async (buffer) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const result = await model.generateContent([
    {
      inlineData: {
        data: Buffer.from(buffer).toString("base64"),
        mimeType: "application/pdf"
      }
    },
    "Please transcribe all the text from this document exactly as it appears. Do not summarize or add commentary."
  ]);

  return result.response.text();
};

module.exports = extractText;