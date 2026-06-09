import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function PdfQuery() {
  const location=useLocation();
  const pdfUrl=location.state.pdfUrl;
  const pdfTitle=location.state.pdfTitle; 
  const [result, setResult] = useState("");

  const Summarize = async () => {
    try {
        setResult("Loading... wait");
        const res = await axios.post("http://localhost:5000/assistantPractice/summarize/", { pdfUrl }, { withCredentials: true });
        
        setResult(res.data.summary); 
    } catch (error) {
        console.error("Summarize Error:", error);
        setResult("");
        const errorMessage = error.response?.data?.message 
            || error.message 
            || "An unexpected error occurred while trying to summarize the PDF.";
            
        alert(`Failed to summarize: ${errorMessage}`);
    }
  }

  const generateQuiz = async () => {
    try {
        setResult("Loading... wait");
        const res = await axios.post("http://localhost:5000/assistantPractice/quiz/", { pdfUrl }, { withCredentials: true });
        setResult(res.data.quiz);
    } catch (error) {
        console.error("Quiz Error:", error);
        setResult("");
        
        const errorMessage = error.response?.data?.message 
            || error.message 
            || "An unexpected error occurred while generating the quiz.";
            
        alert(`Failed to generate quiz: ${errorMessage}`);
    }
  }

  const isLoading = result === "Loading... wait";

  return (
    <div className="app-container animate-fade-in">
      <header className="app-header">
         <h1 className="mb-0" style={{fontSize: '1.25rem', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>{pdfTitle}</h1> 
         <button onClick={() => window.history.back()} className="btn btn-outline" style={{marginLeft: '1rem'}}>Back</button>
      </header>
      
      <main className="container main-content" style={{maxWidth: '800px'}}>
        <div className="d-flex gap-4 mb-6">
            <button 
                onClick={Summarize} 
                className={`btn btn-primary btn-lg w-full ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
            >
                Summarize Document
            </button>
            <button 
                onClick={generateQuiz} 
                className={`btn btn-primary btn-lg w-full ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
                style={{backgroundColor: 'var(--color-secondary)', borderColor: 'var(--color-secondary)'}}
            >
                Generate Quiz
            </button>
        </div>
        
        {result && (
            <div className={`query-output ${isLoading ? 'skeleton-loader' : 'animate-slide-up'}`}>
                <div style={{whiteSpace: 'pre-wrap', color: 'var(--color-text-primary)'}}>
                    {isLoading ? 'Loading content please wait... Generating AI response takes a few moments.' : result}
                </div>
            </div>
        )}
      </main>
    </div>
  )
}

export default PdfQuery;