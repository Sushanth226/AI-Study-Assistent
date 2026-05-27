const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  temperature: 0.3,
  apiKey: process.env.GEMINI_API_KEY,
});

const summarizeChunks = async (chunks) => {

  const chunkSummaries = [];

  // STEP 1 → summarize each chunk

  for (const chunk of chunks) {

    const response = await model.invoke(`
      Summarize this content clearly:

      ${chunk.pageContent}
    `);

    chunkSummaries.push(response.content);
  }

  // STEP 2 → combine summaries

  const finalSummary = await model.invoke(`
    Combine these summaries into
    one clean final summary:

    ${chunkSummaries.join("\n")}
  `);

  return finalSummary.content;
};

module.exports = summarizeChunks;