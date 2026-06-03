# 🤖 AI Study Assistant

> Interactive learning platform powered by AI, LangChain, and Gemini 2.5 Flash for intelligent content summarization, Q&A, PDF processing, and personalized learning paths.

<div align="center">

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-1C1C1C?style=flat-square&logo=chainlink&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini_2.5-8B7FFF?style=flat-square&logo=google&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-13AA52?style=flat-square&logo=mongodb&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active%20Development-brightgreen?style=flat-square)

</div>

---

## 📖 **Project Overview**

This project combines **modern web technologies** with **cutting-edge AI** to create an intelligent learning platform. It features advanced PDF processing, AI-powered summarization, and interactive learning tools—making it a powerful exploration of LangChain, Gemini AI, OpenAI APIs, and full-stack MERN development.

### **Why This Project Matters**
- 🔥 **Hot Technology**: Gemini 2.5 Flash + OpenAI + LangChain
- 📄 **PDF Intelligence**: Native document processing with Gemini's Document API
- 🎓 **Real Problem**: Making education more personalized with AI
- 🚀 **Learning Opportunity**: Integrating AI with full-stack web development
- 💡 **Portfolio Strength**: Shows forward-thinking developer mindset
- 🌟 **Unique Combination**: Web Dev + Advanced AI Integration

---

## 🎯 **Core Features**

### **1. 📄 Smart PDF Processing** ⭐ *NEW*
- Upload PDF documents directly
- AI extracts and processes PDF content using Gemini 2.5 Flash's Document Intelligence API
- Generate summaries from PDF content
- Create AI-powered quizzes from PDF material
- Track uploaded PDFs with user ownership

```
User Uploads PDF
     ↓
Cloudinary Storage + Local Processing
     ↓
Gemini 2.5 Flash Document API: Extract content
     ↓
LangChain Processing: Understand context
     ↓
Output: Summary, Quizzes, Key Points
```

### **2. Smart Content Summarization**
- Upload or paste study material
- AI generates concise summaries
- Multiple summary lengths (short, medium, long)
- Preserves key concepts and information
- Support for both text and PDF documents

```
User Input: Long textbook chapter / PDF
         ↓
LangChain Processing: Extract key concepts
         ↓
OpenAI API: Generate summary
         ↓
Output: Clear, concise summary
```

### **3. Intelligent Q&A System**
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

### **4. Personalized Learning Paths**
- Track user study progress
- AI recommends next topics
- Adaptive difficulty levels
- Learning history and analytics

### **5. User Authentication** ⭐ *NEW*
- Secure login and registration system
- JWT token-based authentication
- Token blacklisting for logout functionality
- Protected routes and APIs

### **6. Multi-Subject Support**
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
| **Vite** | Fast build tool and dev server |
| **React Router** | Client-side routing |
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
| **Multer** | File upload handling |
| **CORS** | Cross-origin requests |

### **AI/ML & Document Processing**
| Technology | Purpose |
|-----------|---------|
| **Gemini 2.5 Flash** | Advanced PDF processing & Document Intelligence |
| **LangChain** | AI orchestration framework |
| **OpenAI API** | GPT language models |
| **Vector Store** | Semantic search |
| **RAG** | Retrieval Augmented Generation |

### **Cloud Services**
| Technology | Purpose |
|-----------|---------|
| **Cloudinary** | PDF and document storage |
| **Google Generative AI** | Gemini API integration |

---

## 📁 **Project Structure**

```
AI-Study-Assistant/
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Dashboard.js
│   │   │   ├── Summarizer.js
│   │   │   ├── QASystem.js
│   │   │   ├── LearningPath.js
│   │   │   ├── Analytics.js
│   │   │   ├── PdfQuery.js          ⭐ NEW
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Logout.js
│   │   │   └── List.js              ⭐ NEW
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Study.js
│   │   │   ├── Profile.js
│   │   │   └── Settings.js
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   └── App.js
│   │
│   ├── vite.config.js
│   └── package.json
│
├── Backend/
│   ├── routes/
│   │   ├── auth.js
│   │   ├── summarize.js
│   │   ├── qa.js
│   │   ├── progress.js
│   │   └── pdf.js                   ⭐ NEW
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── summarizeController.js
│   │   ├── qaController.js
│   │   ├── progressController.js
│   │   └── pdfController.js         ⭐ NEW
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── StudySession.js
│   │   ├── Progress.js
│   │   └── PDF.js                   ⭐ NEW
│   │
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   │
│   ├── services/
│   │   ├── langchainService.js
│   │   ├── openaiService.js
│   │   ├── geminiService.js         ⭐ NEW
│   │   └── extractText.js           ⭐ NEW
│   │
│   ├── config/
│   │   └── database.js
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
- Google Generative AI API key (get from [ai.google.dev](https://ai.google.dev))
- MongoDB Atlas account
- Cloudinary account (for PDF storage)
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

# Google Generative AI (Gemini)
GOOGLE_API_KEY=your-google-api-key-here

# JWT
JWT_SECRET=your_super_secret_jwt_key_min_32_chars_long

# LangChain
LANGCHAIN_API_KEY=your_langchain_key_if_using_hosted

# Cloudinary
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
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
VITE_API_URL=http://localhost:5000
```

Start frontend:
```bash
npm run dev
# Frontend opens on http://localhost:5173 (Vite default)
```

---

## 🤖 **How the AI Integration Works**

### **Gemini 2.5 Flash - Document Intelligence** ⭐ *NEW*

The project now uses Gemini 2.5 Flash's native Document Intelligence API to process PDFs directly without additional PDF parsing libraries:

```javascript
// Backend implementation
const fs = require('fs');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// Upload PDF to Gemini
const filePart = {
  inlineData: {
    data: Buffer.from(fs.readFileSync(pdfPath)).toString("base64"),
    mimeType: "application/pdf",
  },
};

// Generate response with PDF content
const result = await model.generateContent([
  "Summarize this PDF document:",
  filePart
]);
```

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

### **Authentication Endpoints** ⭐ *NEW*

```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secure_password"
}
```

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "secure_password"
}
```

```http
POST /api/auth/logout
Authorization: Bearer <token>
```

### **PDF Upload & Query Endpoints** ⭐ *NEW*

```http
POST /api/pdf/upload
Content-Type: multipart/form-data
Authorization: Bearer <token>

{
  "file": <PDF file>
}
```

**Response:**
```json
{
  "success": true,
  "pdfId": "507f1f77bcf86cd799439011",
  "filename": "study_guide.pdf",
  "uploadedAt": "2026-06-02T10:30:00Z",
  "owner": "user_id"
}
```

```http
POST /api/pdf/summarize
Content-Type: application/json
Authorization: Bearer <token>

{
  "pdfId": "507f1f77bcf86cd799439011",
  "summaryLength": "medium"
}
```

```http
POST /api/pdf/generate-quiz
Content-Type: application/json
Authorization: Bearer <token>

{
  "pdfId": "507f1f77bcf86cd799439011",
  "numberOfQuestions": 10
}
```

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

✅ **Gemini 2.5 Flash Document Intelligence** ⭐ *NEW*
- Direct PDF processing
- Native document understanding
- Advanced AI reasoning

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

✅ **Authentication & Security**
- JWT token implementation
- Password hashing
- Token blacklisting
- Protected routes

✅ **File Upload & Cloud Storage**
- Multer middleware setup
- Cloudinary integration
- File validation

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

### **PDF Processing Flow** ⭐ *NEW*

```
1. User uploads PDF
   └─ Frontend sends to backend via multipart form

2. Backend receives PDF
   └─ Validates file type and size
   └─ Saves to Cloudinary

3. Gemini 2.5 Flash processes PDF
   └─ Document Intelligence API reads content
   └─ Extracts structure and text
   └─ Understands semantic meaning

4. LangChain processes extracted content
   └─ Splits into chunks
   └─ Extracts key information

5. AI generates summary/quiz
   └─ Uses Gemini API
   └─ Applies formatting

6. Response returned
   └─ PDF stored in database
   └─ Summary/Quiz sent to frontend

7. Frontend displays result
   └─ Shows summary to user
   └─ Displays quiz questions
   └─ Allows download/export
```

### **Summarization Flow**

```
1. User submits text or PDF
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

### **Using Gemini 2.5 Flash for PDFs** ⭐ *NEW*

```javascript
// extractText.js - Direct PDF processing with Gemini
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

async function extractAndSummarize(pdfPath) {
  const fs = require('fs');
  
  const filePart = {
    inlineData: {
      data: Buffer.from(fs.readFileSync(pdfPath)).toString("base64"),
      mimeType: "application/pdf",
    },
  };

  const result = await model.generateContent([
    "Extract all text and provide a comprehensive summary of this PDF.",
    filePart
  ]);

  return result.response.text();
}
```

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
- ✅ Project structure set up
- ✅ Backend scaffolding with Express
- ✅ Frontend components with React & Vite
- ✅ API route structure
- ✅ User authentication (Login/Register)
- ✅ JWT token implementation
- ✅ Logout functionality with token blacklisting
- ✅ PDF upload with Cloudinary integration
- ✅ Gemini 2.5 Flash integration for PDF processing
- ✅ PDF summarization feature
- ✅ Quiz generation from PDFs
- ✅ LangChain integration
- ✅ OpenAI API connection
- ✅ CORS support
- ✅ Error handling improvements
- ✅ React routing and navigation

### **In Progress** 🔄
- Q&A system enhancement
- Advanced PDF features
- Learning analytics
- Dashboard improvements

### **Planned** 📋
- Advanced learning paths
- Analytics dashboard with visualizations
- Export functionality (PDF, DOCX)
- Mobile-responsive design improvements
- Real-time collaboration features
- Voice input for questions
- Multiple AI model support
- Offline mode
- Mobile app version
- Performance optimization

---

## 📚 **Resources for Learning**

**Gemini AI** ⭐ *NEW*
- [Google Generative AI Documentation](https://ai.google.dev)
- [Gemini API Reference](https://ai.google.dev/api/rest)
- [Document Intelligence Guide](https://ai.google.dev/docs)

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

### **Test User Authentication** ⭐ *NEW*
1. Go to frontend Login page
2. Register a new account with email and password
3. Login with credentials
4. Verify dashboard loads
5. Click Logout to test token blacklisting

### **Test PDF Upload & Summarization** ⭐ *NEW*
1. Go to PDF Query section
2. Upload a PDF document
3. Click "Summarize PDF"
4. Verify summary is generated by Gemini
5. Check summary accuracy

### **Test PDF Quiz Generation** ⭐ *NEW*
1. Upload a PDF document
2. Click "Generate Quiz"
3. Answer quiz questions
4. View results and explanations

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

### **Gemini API Error** ⭐ *NEW*
```
Error: 403 Forbidden / API Key Invalid
Fix: Check GOOGLE_API_KEY in .env
     Verify API key at ai.google.dev
     Ensure API key has required permissions
     Check quota limits
```

### **PDF Upload Error** ⭐ *NEW*
```
Error: File upload failed
Fix: Check Cloudinary credentials
     Verify CLOUDINARY_NAME, API_KEY, API_SECRET
     Check file size limits (usually 100MB)
     Ensure file is valid PDF
```

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

### **CORS Error** ⭐ *NEW*
```
Error: CORS policy blocked request
Fix: Ensure CORS middleware is configured
     Check frontend URL matches backend CORS settings
     Verify credentials are included in requests
```

---

## 📈 **Performance Optimization**

### **Reduce API Costs**
- Cache frequently asked questions
- Implement response buffering
- Use cheaper models for simple tasks
- Batch requests when possible
- Reuse PDF summaries when available

### **Improve Response Time**
- Implement streaming responses
- Cache embeddings
- Use connection pooling
- Optimize prompt length
- Store PDF processing results

### **Scalability Considerations**
- Use Redis for caching
- Implement rate limiting
- Database indexing
- Load balancing
- CDN for asset delivery

---

## 🤝 **Contributing**

This is a learning project, open to improvements!

1. Fork the repository
2. Create a feature branch
3. Make your improvements
4. Submit a pull request

---

## 📝 **What I'm Learning**

✅ **Advanced AI Integration** - Gemini 2.5 Flash & LangChain  
✅ **Document Processing** - PDF intelligence and extraction  
✅ **API Integration** - Working with multiple AI providers  
✅ **Full-Stack Development** - Combining all layers  
✅ **Modern Web Technologies** - React, Vite, Node.js  
✅ **Authentication & Security** - JWT and token management  
✅ **Cloud Services** - Cloudinary and Google AI  
✅ **Problem Solving** - Building real solutions  

---

## 🔮 **Future Enhancements**

- [ ] Voice input for questions
- [ ] Real-time collaborative study sessions
- [ ] Gamified learning with points and achievements
- [ ] Spaced repetition algorithm for flashcards
- [ ] Multiple AI model support (Claude, Mistral, etc.)
- [ ] Offline mode with sync
- [ ] Mobile app version (React Native)
- [ ] Interactive visualization of complex topics
- [ ] Study group features
- [ ] Performance analytics dashboard
- [ ] Browser extension for web content summarization

---

## 📄 **License**

MIT License - Open for learning and modification

---

<div align="center">

### ⭐ If you find this helpful, please star the repository!

**[View on GitHub](https://github.com/Sushanth226/AI-Study-Assistent)**

Made with ❤️ by Suru Sushanth Sourya

Still Learning & Exploring AI! 🚀

**Latest Update**: June 2, 2026 - Gemini 2.5 Flash PDF Intelligence Integration

</div>
