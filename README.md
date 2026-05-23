# 🤖 AI Study Assistant

> Interactive learning platform powered by AI and LangChain for intelligent content summarization, Q&A, and personalized learning paths.

<div align="center">

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-1C1C1C?style=flat-square&logo=chainlink&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white)
![Status](https://img.shields.io/badge/Status-In%20Development-yellow?style=flat-square)

</div>

---

## 📖 **Project Overview**

This project combines **modern web technologies** with **cutting-edge AI** to create an intelligent learning platform. It's a practical exploration of LangChain, OpenAI APIs, and MERN stack development.

### **Why This Project Matters**
- 🔥 **Hot Technology**: LangChain + OpenAI (trending in 2024-2025)
- 🎓 **Real Problem**: Making education more personalized with AI
- 🚀 **Learning Opportunity**: Integrating AI with full-stack web development
- 💡 **Portfolio Strength**: Shows forward-thinking developer mindset
- 🌟 **Unique Combination**: Rare skill pairing of Web Dev + AI

---

## 🎯 **Core Features**

### **1. Smart Content Summarization**
- Upload or paste study material
- AI generates concise summaries
- Multiple summary lengths (short, medium, long)
- Preserves key concepts and information

```
User Input: Long textbook chapter
         ↓
LangChain Processing: Extract key concepts
         ↓
OpenAI API: Generate summary
         ↓
Output: Clear, concise summary
```

### **2. Intelligent Q&A System**
- Ask questions about any topic
- AI provides detailed, contextual answers
- Sources and explanations included
- Multi-subject support (Math, Science, History, Languages, etc.)

```
User Question: "What is photosynthesis?"
         ↓
LangChain Chain: Format and process question
         ↓
OpenAI API: Generate detailed answer
         ↓
Output: Educational explanation with examples
```

### **3. Personalized Learning Paths**
- Track user study progress
- AI recommends next topics
- Adaptive difficulty levels
- Learning history and analytics

### **4. Multi-Subject Support**
- Mathematics (Algebra, Calculus, Geometry)
- Science (Physics, Chemistry, Biology)
- Languages (English, Spanish, French, etc.)
- History and Social Studies
- Competitive Exam Prep

---

## 🛠️ **Technology Stack**

### **Frontend**
| Technology | Purpose |
|-----------|---------|
| **React.js** | Interactive UI components |
| **JavaScript** | Client-side logic |
| **HTML5/CSS3** | Structure and styling |
| **Bootstrap/Tailwind** | Responsive design |
| **Axios** | API communication |

### **Backend**
| Technology | Purpose |
|-----------|---------|
| **Node.js** | Server runtime |
| **Express.js** | API framework |
| **MongoDB** | User data storage |
| **Mongoose** | Database modeling |

### **AI/ML**
| Technology | Purpose |
|-----------|---------|
| **LangChain** | AI orchestration framework |
| **OpenAI API** | GPT language models |
| **Vector Store** | Semantic search |
| **RAG** | Retrieval Augmented Generation |

---

## 📁 **Project Structure**

```
AI-Study-Assistant/
│
├── Frontend/
│   └── src/
│       ├── components/
│       │   ├── Navbar.js
│       │   ├── Dashboard.js
│       │   ├── Summarizer.js
│       │   ├── QASystem.js
│       │   ├── LearningPath.js
│       │   └── Analytics.js
│       │
│       ├── pages/
│       │   ├── Home.js
│       │   ├── Study.js
│       │   ├── Profile.js
│       │   └── Settings.js
│       │
│       ├── services/
│       │   └── api.js
│       │
│       └── App.js
│
├── Backend/
│   ├── routes/
│   │   ├── auth.js
│   │   ├── summarize.js
│   │   ├── qa.js
│   │   └── progress.js
│   │
│   ├── controllers/
│   │   ├── summarizeController.js
│   │   ├── qaController.js
│   │   └── progressController.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── StudySession.js
│   │   └── Progress.js
│   │
│   ├── services/
│   │   ├── langchainService.js
│   │   └── openaiService.js
│   │
│   └── index.js
│
└── README.md
```

---

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js v14+ installed
- OpenAI API key (get from [platform.openai.com](https://platform.openai.com))
- MongoDB Atlas account
- npm or yarn

### **Installation**

#### **Step 1: Clone Repository**
```bash
git clone https://github.com/Sushanth226/AI-Study-Assistent.git
cd AI-Study-Assistent
```

#### **Step 2: Backend Setup**

```bash
cd Backend
npm install
```

Create `.env` file:
```env
# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ai_study?retryWrites=true&w=majority

# Server
PORT=5000
NODE_ENV=development

# OpenAI
OPENAI_API_KEY=sk-your-api-key-here

# JWT
JWT_SECRET=your_super_secret_jwt_key_min_32_chars_long

# LangChain
LANGCHAIN_API_KEY=your_langchain_key_if_using_hosted
```

Start backend:
```bash
npm start
# Backend runs on http://localhost:5000
```

#### **Step 3: Frontend Setup**

```bash
cd ../Frontend
npm install
```

Create `.env` file:
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_OPENAI_KEY=sk-your-api-key
```

Start frontend:
```bash
npm start
# Frontend opens on http://localhost:3000
```

---

## 🤖 **How LangChain Works**

### **What is LangChain?**
LangChain is a framework for building applications with Large Language Models (LLMs). It provides tools to:
- Connect to OpenAI and other LLMs
- Process documents and text
- Create intelligent chains of operations
- Build conversational systems

### **Key Concepts**

#### **1. Chains**
A sequence of operations connected together:

```python
# Example: Summarize → Translate → Format
chain = summary_chain | translate_chain | format_chain
result = chain.invoke({"input": "long text"})
```

#### **2. Prompts**
Instructions to the AI model:

```python
from langchain.prompts import PromptTemplate

prompt = PromptTemplate(
    input_variables=["text", "style"],
    template="Summarize this text in {style} style:\n{text}"
)
```

#### **3. Memory**
Remembering conversation history:

```python
from langchain.memory import ConversationBufferMemory

memory = ConversationBufferMemory()
# Store conversation history for context
```

#### **4. Document Processing**
Loading and splitting documents:

```python
from langchain.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter

loader = TextLoader("study_material.txt")
docs = loader.load()
splitter = CharacterTextSplitter(chunk_size=1000)
texts = splitter.split_documents(docs)
```

---

## 📡 **API Endpoints**

### **Summarization Endpoint**
```http
POST /api/summarize
Content-Type: application/json
Authorization: Bearer <token>

{
  "content": "Long text to summarize...",
  "length": "medium",  // short, medium, long
  "language": "English"
}
```

**Response:**
```json
{
  "success": true,
  "summary": "Concise summary of the content...",
  "originalLength": 2500,
  "summaryLength": 450,
  "keyPoints": ["Point 1", "Point 2", "Point 3"]
}
```

### **Q&A Endpoint**
```http
POST /api/qa
Content-Type: application/json
Authorization: Bearer <token>

{
  "question": "What is photosynthesis?",
  "context": "Science",
  "difficulty": "intermediate"
}
```

**Response:**
```json
{
  "success": true,
  "question": "What is photosynthesis?",
  "answer": "Photosynthesis is the process by which...",
  "sources": ["textbook_ch3", "wikipedia"],
  "relatedTopics": ["Cellular respiration", "Chloroplasts"]
}
```

### **Learning Progress Endpoint**
```http
GET /api/progress
Authorization: Bearer <token>
```

---

## 🎓 **Learning AI Integration**

### **What You'll Learn**

✅ **LangChain Framework**
- Document loading and processing
- Creating prompts and chains
- Vector embeddings basics
- RAG (Retrieval Augmented Generation)

✅ **OpenAI API Integration**
- API authentication
- Making API calls
- Handling responses
- Error management

✅ **AI in Web Applications**
- Combining frontend + AI
- Real-time processing
- Streaming responses
- Cost optimization

✅ **Full-Stack Development**
- Building complete application
- User authentication
- Data persistence
- Deployment

---

## 🔄 **How It Works - Step by Step**

### **Summarization Flow**

```
1. User submits text
   └─ Frontend sends to backend via API

2. Backend receives request
   └─ Validates input and user

3. LangChain processes text
   └─ Splits into chunks
   └─ Extracts key information

4. OpenAI API generates summary
   └─ Uses GPT model
   └─ Applies temperature settings

5. Response returned
   └─ Summary sent to frontend
   └─ Stored in database

6. Frontend displays result
   └─ Shows summary to user
   └─ Allows download/export
```

### **Q&A Flow**

```
1. User asks question
   └─ Frontend sends question to backend

2. Backend processes question
   └─ Checks for duplicate questions
   └─ Searches knowledge base (vector store)

3. LangChain creates context
   └─ Retrieves relevant documents
   └─ Builds context for answer

4. OpenAI API generates answer
   └─ Uses context + question
   └─ Generates detailed response

5. Response returned
   └─ Answer sent to frontend
   └─ Session stored for learning analytics

6. Frontend displays answer
   └─ Shows with citations
   └─ Suggests related topics
```

---

## 💡 **Key Implementation Details**

### **Using LangChain with OpenAI**

```javascript
// Backend example using Node.js LangChain
const { OpenAI } = require("langchain/llms/openai");
const { PromptTemplate } = require("langchain/prompts");
const { LLMChain } = require("langchain/chains");

// Initialize LLM
const model = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  temperature: 0.7
});

// Create prompt template
const template = `Summarize this content in {style} style:
{content}
Summary:`;

const prompt = new PromptTemplate({
  inputVariables: ["content", "style"],
  template
});

// Create chain
const chain = new LLMChain({ llm: model, prompt });

// Use chain
const result = await chain.call({
  content: userContent,
  style: "concise"
});
```

### **Vector Embeddings for Search**

```javascript
// Convert text to embeddings for semantic search
const { OpenAIEmbeddings } = require("langchain/embeddings/openai");
const { MemoryVectorStore } = require("langchain/vectorstores/memory");

const embeddings = new OpenAIEmbeddings();
const vectorStore = new MemoryVectorStore(embeddings);

// Store documents
await vectorStore.addDocuments(documents);

// Search
const results = await vectorStore.similaritySearch("user query");
```

---

## 🎯 **Current Development Status**

### **Completed Features** ✅
- Project structure set up
- Basic backend scaffolding
- Frontend components planned
- API route structure

### **In Progress** 🔄
- LangChain integration
- OpenAI API connection
- Summarization feature
- Q&A system

### **Planned** 📋
- User authentication
- Learning paths
- Analytics dashboard
- Export functionality
- Mobile-responsive design

---

## 📚 **Resources for Learning**

**LangChain**
- [Official Documentation](https://python.langchain.com)
- [GitHub Repository](https://github.com/langchain-ai/langchain)
- [LangChain JS](https://js.langchain.com) - For Node.js

**OpenAI**
- [API Documentation](https://platform.openai.com/docs)
- [API Reference](https://platform.openai.com/docs/api-reference)
- [Best Practices](https://platform.openai.com/docs/guides/safety-best-practices)

**AI/ML Concepts**
- [Vector Embeddings Explained](https://www.openai.com/blog/new-and-improved-embedding-model/)
- [RAG Explained](https://towardsdatascience.com/retrieval-augmented-generation-rag-explained-99ed46dd8629)
- [Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)

---

## 🧪 **Testing the Features**

### **Test Summarization**
1. Go to frontend
2. Click "Summarize"
3. Paste sample text:
   ```
   "Photosynthesis is a process used by plants and other organisms to convert 
   light energy into chemical energy that can later be released to fuel the 
   plant's activities. This chemical energy is stored in carbohydrate molecules..."
   ```
4. Select "short" length
5. Click Summarize
6. Verify concise summary is returned

### **Test Q&A**
1. Click "Ask Question"
2. Enter: "What is machine learning?"
3. Select subject: "Technology"
4. Click Ask
5. Verify detailed answer is returned

---

## 🐛 **Troubleshooting**

### **OpenAI API Error**
```
Error: 401 Unauthorized
Fix: Check OPENAI_API_KEY in .env
    Verify API key is valid at platform.openai.com
    Ensure API key has proper permissions
```

### **LangChain Import Error**
```
Error: Cannot find module 'langchain'
Fix: npm install langchain
    For specific integrations: npm install @langchain/openai
```

### **MongoDB Connection Error**
```
Error: Cannot connect to MongoDB
Fix: Check MONGODB_URI in .env
    Verify IP whitelist in MongoDB Atlas
    Ensure network access is enabled
```

---

## 📈 **Performance Optimization**

### **Reduce API Costs**
- Cache frequently asked questions
- Implement response buffering
- Use cheaper models for simple tasks
- Batch requests when possible

### **Improve Response Time**
- Implement streaming responses
- Cache embeddings
- Use connection pooling
- Optimize prompt length

### **Scalability Considerations**
- Use Redis for caching
- Implement rate limiting
- Database indexing
- Load balancing

---

## 🤝 **Contributing**

This is a learning project, open to improvements!

1. Fork the repository
2. Create a feature branch
3. Make your improvements
4. Submit a pull request

---

## 📝 **What I'm Learning**

✅ **AI Framework Integration** - Practical LangChain usage  
✅ **API Integration** - Working with OpenAI  
✅ **Full-Stack Development** - Combining all layers  
✅ **Modern Web Technologies** - Latest frameworks  
✅ **Problem Solving** - Building real solutions  

---

## 🔮 **Future Enhancements**

- [ ] Voice input for questions
- [ ] PDF document upload
- [ ] Real-time collaborative study
- [ ] Gamified learning with points
- [ ] AI-generated quizzes
- [ ] Multiple AI model support
- [ ] Offline mode
- [ ] Mobile app version

---

## 📄 **License**

MIT License - Open for learning and modification

---

<div align="center">

### ⭐ If you find this helpful, please star the repository!

**[View on GitHub](https://github.com/Sushanth226/AI-Study-Assistent)**

Made with ❤️ by Suru Sushanth Sourya

Still Learning & Exploring AI! 🚀

</div>
