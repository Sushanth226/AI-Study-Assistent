const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  temperature: 0.7,
  apiKey: process.env.GEMINI_API_KEY,
});

const generateQuiz = async (retriever) => {

  const docs = await retriever.invoke(
    "Generate important quiz questions"
  );

  const context = docs.map(doc => doc.pageContent).join("\n");

  const response = await model.invoke(`
    Generate 10 MCQ questions from this content:

    ${context}
  `);

  return response.content;
};

module.exports = generateQuiz;