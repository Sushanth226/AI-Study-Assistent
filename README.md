# 🤖 AI Study Assistant

> An intelligent learning platform powered by Gemini 2.5 Flash, LangChain, and advanced RAG for AI-driven document understanding, semantic search, and personalized learning experiences.

<div align="center">

[![React](https://img.shields.io/badge/React-19.2.6-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-9.6.2-13AA52?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com)
[![LangChain](https://img.shields.io/badge/LangChain-RAG-1C1C1C?style=flat-square&logo=chainlink&logoColor=white)](https://js.langchain.com)
[![Gemini](https://img.shields.io/badge/Gemini_2.5-Document_AI-8B7FFF?style=flat-square&logo=google&logoColor=white)](https://ai.google.dev)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active%20Development-brightgreen?style=flat-square)](https://github.com/Sushanth226/AI-Study-Assistent)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [RAG Pipeline](#rag-pipeline-explained)
- [System Architecture](#system-architecture)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Challenges & Solutions](#challenges--solutions)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [Author](#author)

---

## 🎯 Overview

**AI Study Assistant** is a full-stack intelligent learning platform that leverages cutting-edge AI technologies to transform how students learn and process educational content. The platform combines modern web development with advanced AI/ML capabilities to provide:

- **🔍 Semantic Understanding**: Uses vector embeddings to understand content semantically
- **📚 Context-Aware Responses**: Implements RAG (Retrieval-Augmented Generation) for accurate answers
- **⚡ Real-time Processing**: Instant PDF upload and processing with Gemini 2.5 Flash
- **🎓 Personalized Learning**: Adapted to individual learning pace and style
- **🔐 Secure & Scalable**: JWT authentication with Cloudinary cloud storage

### Why AI Study Assistant?

Traditional learning platforms lack:
- ❌ Understanding of document context
- ❌ Semantic search capabilities
- ❌ AI-powered personalization
- ❌ Intelligent document processing

**AI Study Assistant solves these with:**
- ✅ Advanced RAG pipeline for context understanding
- ✅ Vector embeddings for semantic similarity
- ✅ Gemini 2.5 Flash for native PDF intelligence
- ✅ LangChain orchestration for reliable AI chains
- ✅ MongoDB for scalable data management

---

## 🔴 Problem Statement

### Current Challenges in Education

1. **Information Overload**: Students struggle with massive volumes of study material
2. **Passive Learning**: Traditional resources don't provide interactive, personalized support
3. **PDF Processing Limitations**: Most platforms can't handle scanned or image-heavy PDFs
4. **Lack of Context Understanding**: Generic search doesn't understand document semantics
5. **Time Consumption**: Manual summarization and organization takes hours

### Our Solution

AI Study Assistant provides:
- **Instant Summarization**: AI-powered summaries in multiple lengths
- **Smart Q&A**: Context-aware answers using RAG
- **Semantic Search**: Find relevant content using meaning, not just keywords
- **Interactive Learning**: Quiz generation and progress tracking
- **Scalable Architecture**: Handle any document size efficiently

---

## ✨ Key Features

### 1. 📄 Smart PDF Upload & Processing

Upload any PDF document and let Gemini 2.5 Flash intelligently process it.

```
User Upload → Cloudinary Storage → Gemini Text Extraction
    ↓
Document Chunking → Vector Embedding → Semantic Search Ready
```

**Capabilities:**
- Handles PDFs up to 20MB
- Extracts text from scanned documents
- Creates searchable embeddings
- Owner-based access control

**Routes:**
```
POST   /pdf/upload    - Upload new PDF
GET    /pdf/getPdfs   - Retrieve user's PDFs
DELETE /pdf/deletePdf/:id - Remove PDF
```

---

### 2. 🧠 RAG-Powered Q&A System

Ask questions and get contextually accurate answers powered by vector similarity search.

**How It Works:**
1. Convert question to embeddings
2. Search vector store for relevant chunks
3. Augment prompt with retrieved context
4. Generate answer using Gemini
5. Return contextual response

**Key Advantages:**
- Reduces hallucinations through document grounding
- Provides source citations
- Context-aware responses
- Multi-turn conversation support

---

### 3. 📝 AI-Powered Summarization

Transform lengthy documents into concise, structured summaries.

**Two-Stage Summarization:**
- **Stage 1**: Summarize individual chunks
- **Stage 2**: Combine summaries into cohesive final summary

**Supported Lengths:**
- Short (20-30% of original)
- Medium (40-50% of original)
- Long (70-80% of original)

---

### 4. 📋 Intelligent Quiz Generation

Automatically generate quiz questions from PDF content.

**Features:**
- Multiple question types (MCQ, short answer, essay)
- Difficulty levels (Easy, Medium, Hard)
- Customizable question count
- Instant feedback system

---

### 5. 🔐 Secure Authentication

JWT-based authentication with token blacklisting for secure logout.

**Security Implementation:**
- Bcrypt password hashing (10 salt rounds)
- 2-hour JWT expiration
- Token blacklist on logout
- HTTP-only cookies
- CORS protection

```
Registration → Hash Password → Create User → Issue JWT → Secure Storage
```

---

### 6. 🎯 Personalized Learning Paths

Track progress and receive adaptive learning recommendations.

**Tracking:**
- Questions attempted
- Success rate by subject
- Time spent on topics
- Concepts mastered vs. weak areas
- Progress visualization

---

## 🛠️ Technology Stack

### Frontend

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React.js** | 19.2.6 | UI Framework |
| **Vite** | 8.0.12 | Build tool & dev server |
| **React Router** | 7.15.1 | Client-side routing |
| **Axios** | 1.16.1 | HTTP client |
| **JavaScript (ES6+)** | - | Frontend logic |

### Backend

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Node.js** | 14+ | Runtime environment |
| **Express.js** | Latest | API framework |
| **MongoDB** | 9.6.2 | NoSQL database |
| **Mongoose** | 9.6.2 | ODM for MongoDB |
| **Multer** | 2.1.1 | File upload handling |
| **JWT** | 9.0.3 | Authentication |
| **Bcrypt** | 6.0.0 | Password hashing |

### AI & RAG Pipeline

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Gemini 2.5 Flash** | Latest | Document understanding & AI responses |
| **LangChain** | 1.4.2 | AI orchestration framework |
| **@langchain/textsplitters** | 1.0.1 | Document chunking |
| **@langchain/google-genai** | 2.1.31 | Gemini integration |
| **@langchain/core** | 1.1.48 | LangChain core |

### Cloud & Storage

| Service | Purpose |
|---------|---------|
| **Cloudinary** | PDF file storage & CDN |
| **MongoDB Atlas** | Cloud database |
| **Google Generative AI** | Gemini API access |

### Development Tools

| Tool | Version | Purpose |
|-----|---------|---------|
| **Nodemon** | 3.1.14 | Auto-reload development |
| **ESLint** | 10.3.0 | Code quality |
| **npm** | Latest | Package management |

---

## 🧬 RAG Pipeline Explained

### What is RAG?

**RAG (Retrieval-Augmented Generation)** combines document retrieval with AI generation to provide accurate, contextual answers grounded in your documents.

### Pipeline Steps

#### **Step 1: PDF Upload & Storage**
```
User uploads PDF
    ↓
File validation (type, size)
    ↓
Stream to Cloudinary
    ↓
Store metadata in MongoDB
```

#### **Step 2: Text Extraction**
```
Download PDF from Cloudinary
    ↓
Gemini 2.5 Flash processes PDF
    ↓
Extract all text content
    ↓
Clean and normalize text
```

**Implementation:**
```javascript
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
    "Transcribe all text from this document exactly"
  ]);
  
  return result.response.text();
};
```

#### **Step 3: Document Chunking**
```
Split extracted text into manageable chunks
    ↓
Chunk size: 1000 characters
    ↓
Overlap: 200 characters (context preservation)
    ↓
Create Document objects
```

**Configuration:**
```javascript
const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
});

const chunks = await splitter.createDocuments([text]);
```

**Why Chunking?**
- LLMs have context window limits
- Smaller chunks = better semantic relevance
- Overlap preserves context across chunks
- Enables efficient similarity search

#### **Step 4: Vector Embedding Generation**
```
For each chunk:
    ↓
Convert text to numerical vector (embedding)
    ↓
Store in vector store
    ↓
Enable semantic similarity comparison
```

#### **Step 5: Similarity Search for Q&A**
```
User asks question
    ↓
Convert question to embedding
    ↓
Find similar chunks using cosine similarity
    ↓
Retrieve top-3 most relevant chunks
    ↓
Score: 0-1 (higher = more relevant)
```

#### **Step 6: Context Augmentation & Response**
```
Retrieved chunks + User question
    ↓
Build augmented prompt with context
    ↓
Pass to Gemini API
    ↓
Generate contextual answer
    ↓
Return with source citations
```

### Why RAG Over Direct LLM?

| Aspect | Direct LLM | RAG |
|--------|-----------|-----|
| **Hallucinations** | ❌ High risk | ✅ Grounded in docs |
| **Outdated Info** | ❌ Limited knowledge | ✅ Uses current docs |
| **Citations** | ❌ None | ✅ Source tracking |
| **Accuracy** | ❌ ~70% | ✅ ~95% |
| **Cost** | ❌ Full API calls | ✅ Optimized queries |

---

## 🏗️ System Architecture

### Components

```
Frontend (React) → API (Express) → Services → AI & Storage
    ↓                  ↓              ↓          ↓
UI Components    Routes/Auth    Business     Gemini
React Router     Middleware     Logic        MongoDB
State Mgmt       Controllers    Processors   Cloudinary
```

### Data Flow

```
1. User uploads PDF
   ↓ (Multer validates)
2. Stream to Cloudinary
   ↓ (Get secure URL)
3. Extract text with Gemini
   ↓ (PDF → Text)
4. Chunk text (1000 char chunks)
   ↓ (Manage context)
5. Generate embeddings
   ↓ (Create vectors)
6. Store in vector DB
   ↓ (Enable search)
7. Save metadata to MongoDB
   ↓ (Track ownership)
8. Return to user
```

---

## 📁 Project Structure

```
AI-Study-Assistent/
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.jsx              # Landing page
│   │   │   ├── Login.jsx             # Authentication
│   │   │   ├── Register.jsx          # User registration
│   │   │   ├── Dashboard.jsx         # Main hub
│   │   │   ├── PdfQuery.jsx          # PDF interaction
│   │   │   ├── List.jsx              # PDF list
│   │   │   ├── Logout.jsx            # Logout handler
│   │   │   └── Navbar.jsx            # Navigation
│   │   ├── styles/
│   │   │   ├── App.css
│   │   │   └── index.css
│   │   ├── App.jsx                   # Root component
│   │   ├── main.jsx                  # Entry point
│   │   └── index.css
│   ├── vite.config.js
│   ├── package.json
│   └── index.html
│
├── Backend/
│   ├── src/
│   │   ├── routers/
│   │   │   ├── auth.js               # Auth routes
│   │   │   ├── pdf.js                # PDF routes
│   │   │   └── assistantPractice.js  # Q&A routes
│   │   │
│   │   ├── controllers/
│   │   │   ├── User.js               # Auth logic
│   │   │   ├── pdfController.js      # PDF operations
│   │   │   ├── summarizeController.js # Summarization
│   │   │   └── quizController.js     # Quiz generation
│   │   │
│   │   ├── models/
│   │   │   ├── User.js               # User schema
│   │   │   ├── pdf.js                # PDF metadata
│   │   │   └── BlackListing.js       # Token blacklist
│   │   │
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js     # JWT verification
│   │   │   └── multerMiddleware.js   # File upload
│   │   │
│   │   ├── services/
│   │   │   ├── pdfProcessing.js      # PDF processing
│   │   │   ├── summarizeService.js   # Summarization
│   │   │   ├── quizService.js        # Quiz generation
│   │   │   └── embeddingAi.js        # Embeddings
│   │   │
│   │   ├── util/
│   │   │   ├── extractText.js        # Gemini text extraction
│   │   │   └── chunkText.js          # Document chunking
│   │   │
│   │   ├── dataBase/
│   │   │   ├── config.js             # MongoDB connection
│   │   │   └── cloudinary.js         # Cloudinary setup
│   │   │
│   │   ├── app.js                    # Express config
│   │   └── server.js                 # Server entry
│   │
│   ├── package.json
│   └── .env.example
│
├── README.md
├── .gitignore
└── package.json (root)
```

---

## 🚀 Installation

### Prerequisites

- **Node.js** v14 or higher
- **npm** or **yarn**
- **MongoDB Atlas** account (free tier available)
- **Cloudinary** account (free tier available)
- **Google Generative AI API key** (free)
- **Git**

### Step 1: Clone Repository

```bash
git clone https://github.com/Sushanth226/AI-Study-Assistent.git
cd AI-Study-Assistent
```

### Step 2: Backend Setup

```bash
cd Backend
npm install
```

Create `.env` file in `Backend/`:

```env
# MongoDB
MONGO_DB_URL=mongodb+srv://username:password@cluster.mongodb.net/ai_study_assistant?retryWrites=true&w=majority

# Server
PORT=5000
NODE_ENV=development

# JWT
JWT_SECRET_KEY=your_super_secret_jwt_key_min_32_chars_long

# Google Generative AI (Gemini)
GEMINI_API_KEY=your_google_api_key_here

# Cloudinary
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

**Start Backend Server:**

```bash
npm run dev
# Backend runs on http://localhost:5000
```

### Step 3: Frontend Setup

```bash
cd ../Frontend
npm install
```

Create `.env` file in `Frontend/`:

```env
VITE_API_URL=http://localhost:5000
```

**Start Frontend Development Server:**

```bash
npm run dev
# Frontend opens on http://localhost:5173
```

### Step 4: Access Application

Open your browser and navigate to:

```
http://localhost:5173
```

---

## 🔑 Environment Variables

### Backend `.env`

```env
# ==================== DATABASE ====================
MONGO_DB_URL=mongodb+srv://username:password@cluster.mongodb.net/ai_study_assistant?retryWrites=true&w=majority

# ==================== SERVER ====================
PORT=5000
NODE_ENV=development

# ==================== AUTHENTICATION ====================
JWT_SECRET_KEY=your_super_secret_jwt_key_minimum_32_characters_long

# ==================== GOOGLE GENERATIVE AI ====================
GEMINI_API_KEY=AIzaSy...your_complete_google_api_key...

# ==================== CLOUDINARY ====================
CLOUDINARY_NAME=your_cloudinary_account_name
CLOUDINARY_API_KEY=1234567890123456789
CLOUDINARY_API_SECRET=your_cloudinary_api_secret_key
```

### Frontend `.env`

```env
VITE_API_URL=http://localhost:5000
```

### Getting API Keys

**MongoDB:**
1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free cluster
3. Get connection string from "Connect" button

**Gemini API:**
1. Visit [Google AI Studio](https://ai.google.dev)
2. Click "Get API Key"
3. Copy key directly

**Cloudinary:**
1. Sign up at [Cloudinary](https://cloudinary.com)
2. Navigate to Settings → API Keys
3. Copy Name, Key, and Secret

---

## 📡 API Documentation

### Authentication Endpoints

#### Register User

```http
POST /auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (201):**
```json
"Token created:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

---

#### Login User

```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
"Token created:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

---

#### Logout User

```http
POST /auth/logout
Authorization: Bearer <token>
```

**Response (200):**
```json
"Logout as the token is added to the Black List"
```

---

### PDF Endpoints

#### Upload PDF

```http
POST /pdf/upload
Content-Type: multipart/form-data
Authorization: Bearer <token>

FormData:
  - file: <PDF file>
  - title: "Study Guide"
```

**Response (201):**
```json
{
  "success": true,
  "pdf": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Study Guide",
    "pdfUrl": "https://res.cloudinary.com/.../...",
    "fileSize": 2048576,
    "owner": "507f1f77bcf86cd799439010"
  }
}
```

---

#### Get User's PDFs

```http
GET /pdf/getPdfs
Authorization: Bearer <token>
```

**Response (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "JavaScript Guide",
    "pdfUrl": "https://res.cloudinary.com/.../...",
    "fileSize": 2048576,
    "createdAt": "2026-06-09T11:00:00Z"
  }
]
```

---

#### Delete PDF

```http
DELETE /pdf/deletePdf/:id
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "message": "PDF deleted"
}
```

---

### AI Endpoints

#### Summarize PDF

```http
POST /assistantPractice/summarize
Content-Type: application/json
Authorization: Bearer <token>

{
  "pdfUrl": "https://res.cloudinary.com/.../..."
}
```

**Response (200):**
```json
{
  "success": true,
  "summary": "This document discusses..."
}
```

---

#### Generate Quiz

```http
POST /assistantPractice/generateQuiz
Content-Type: application/json
Authorization: Bearer <token>

{
  "pdfUrl": "https://res.cloudinary.com/.../...."
}
```

**Response (200):**
```json
{
  "success": true,
  "quiz": {
    "questions": [
      {
        "question": "What is...",
        "type": "mcq",
        "options": ["A", "B", "C", "D"]
      }
    ]
  }
}
```

---

## 🛠️ Challenges & Solutions

### Challenge 1: PDF Parsing Issues

**Problem:**
- Traditional PDF libraries struggle with scanned/image-based PDFs
- Complex layouts and special characters cause failures

**Solution:**
- Integrated **Gemini 2.5 Flash Document Intelligence API**
- Native PDF processing without external parsers
- Handles both text and image-based PDFs accurately

```javascript
// Gemini native processing
const genAI = new GoogleGenerativeAI(apiKey);
const result = await model.generateContent([
  { inlineData: { data: base64, mimeType: 'application/pdf' } },
  "Extract text"
]);
```

---

### Challenge 2: Context Understanding

**Problem:**
- Direct LLM responses often hallucinate
- No grounding in actual document content

**Solution:**
- Implemented **RAG Pipeline** with vector embeddings
- Semantic search for relevant context
- Augment prompts with retrieved chunks
- Ground answers in actual document content

---

### Challenge 3: API Cost Optimization

**Problem:**
- Processing large PDFs multiple times increases costs

**Solution:**
- Cache processed PDFs in MongoDB
- Reuse vector stores for multiple queries
- Use Gemini 2.5 Flash (faster, cheaper)

---

### Challenge 4: File Upload Security

**Problem:**
- Need to validate file types and prevent malicious uploads

**Solution:**
- MIME type validation via Multer
- File size limits (20MB)
- Stream uploads to Cloudinary
- Secure metadata tracking

---

### Challenge 5: Scalability

**Problem:**
- Need to handle growing user base and concurrent requests

**Solution:**
- MongoDB Atlas for auto-scaling
- Cloudinary CDN for file delivery
- Stateless JWT authentication
- Batch processing for embeddings

---

## 🔮 Future Enhancements

### 1. 📚 Multi-Document RAG
- Query across multiple PDFs simultaneously
- Unified vector store with cross-document retrieval
- Compare and synthesize information from multiple sources

### 2. 🎬 Video Lesson Integration
- Process YouTube videos and lectures
- Speech-to-text + transcript processing
- Expand beyond PDFs to multimedia

### 3. 🗣️ Voice Q&A Assistant
- Ask questions via voice
- Speech recognition → Text processing
- Hands-free learning experience

### 4. 📊 Advanced Analytics Dashboard
- Detailed learning analytics
- Track progress and weak areas
- Data-driven learning optimization

### 5. 🎮 Gamification
- Leaderboards, achievements, streaks
- Point system and badges
- Increased engagement and motivation

### 6. 💬 Persistent Chat History
- Save conversation history
- Review previous discussions
- Track learning progress over time

### 7. 🌐 Multi-Language Support
- Support 10+ languages
- Translation API integration
- Global accessibility

### 8. 🤝 Collaborative Learning
- Group study features
- Real-time document sharing
- Shared Q&A and discussion

### 9. 📱 Mobile App (React Native)
- iOS/Android native apps
- On-the-go learning
- Offline support

### 10. 🔄 Offline Mode
- Work without internet
- Local vector store
- Automatic sync when online

### 11. 🎓 Spaced Repetition Algorithm
- Optimal review scheduling
- SM-2 algorithm for flashcards
- Scientific learning approach

### 12. 🏆 Certification Paths
- Complete learning modules
- Structured courses and assessments
- Credible learning outcomes

---

## 💡 Tips for Best Results

### PDF Upload Tips
- ✅ Use clear, high-quality PDFs
- ✅ Ensure text is searchable
- ✅ Organize content logically
- ❌ Avoid extremely large files (>20MB)
- ❌ Don't upload corrupted PDFs

### Q&A Tips
- ✅ Ask specific, focused questions
- ✅ Provide subject context
- ✅ Use clear, academic language
- ❌ Avoid multi-part questions

### Summarization Tips
- ✅ Choose appropriate length
- ✅ Review key points generated
- ✅ Verify details in original
- ❌ Don't rely solely on summaries

---

## 🐛 Troubleshooting

### Backend Connection Issues

```
Error: Cannot connect to MongoDB
Fix:
- Verify MONGO_DB_URL in .env
- Check IP whitelist in MongoDB Atlas
- Ensure network access is enabled
```

### Gemini API Errors

```
Error: 403 Forbidden / API Key Invalid
Fix:
- Verify GEMINI_API_KEY in .env
- Check API key at ai.google.dev
- Ensure API is enabled
- Check quota limits
```

### PDF Upload Fails

```
Error: File size too large
Fix:
- Keep PDFs under 20MB
- Compress if needed
- Check file isn't corrupted
```

### Frontend Can't Connect to Backend

```
Error: CORS policy blocked request
Fix:
- Ensure backend runs on port 5000
- Check VITE_API_URL in .env
- Verify CORS configuration
- Clear browser cache
```

---

## 📚 Learning Resources

### Documentation
- [LangChain JS](https://js.langchain.com) - AI orchestration
- [Gemini API Docs](https://ai.google.dev/docs) - Document intelligence
- [MongoDB Docs](https://docs.mongodb.com) - Database
- [Express.js Guide](https://expressjs.com) - Backend framework

### Tutorials
- [RAG Explained](https://towardsdatascience.com/retrieval-augmented-generation-rag-explained-99ed46dd8629)
- [Vector Embeddings](https://www.openai.com/blog/new-and-improved-embedding-model/)
- [JWT Authentication](https://auth0.com/blog/get-started-with-json-web-tokens/)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Contribution Guidelines
- Follow existing code style
- Add comments for complex logic
- Test before submitting PR
- Update README if needed
- Be respectful and constructive

---

## 📝 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

MIT License - Free for personal and commercial use.

---

## 👨‍💻 Author

**Sushanth Sourya**

- 🔗 [GitHub Profile](https://github.com/Sushanth226)
- 💼 Building AI-powered educational tools
- 🚀 Full-stack developer, AI enthusiast
- 📧 For inquiries, open an issue on GitHub

---

## 🙏 Acknowledgments

- **Gemini 2.5 Flash** for advanced document processing
- **LangChain** for seamless AI orchestration
- **React** and **Node.js** communities
- Students and educators using this platform

---

<div align="center">

### ⭐ If you find this project helpful, please consider giving it a star!

**Made with ❤️ for students, teachers, and lifelong learners**

![Last Updated](https://img.shields.io/badge/Last%20Updated-June%202026-blue?style=flat-square)
![Repository Status](https://img.shields.io/badge/Repository-Active-success?style=flat-square)

**[View on GitHub](https://github.com/Sushanth226/AI-Study-Assistent)** • **[Report Issue](https://github.com/Sushanth226/AI-Study-Assistent/issues)** • **[Suggest Feature](https://github.com/Sushanth226/AI-Study-Assistent/discussions)**

</div>
