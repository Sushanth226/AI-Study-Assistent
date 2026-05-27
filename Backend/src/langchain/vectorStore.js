const { MemoryVectorStore } =
require("@langchain/classic/vectorstores/memory");

const embeddings =
require("../services/embeddingAi");

const createVectorStore = async (chunks) => {

  return await MemoryVectorStore.fromDocuments(
    chunks,
    embeddings
  );
};

module.exports = createVectorStore;