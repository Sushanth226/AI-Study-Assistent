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
        const res = await axios.post("http://localhost:5000/assistantPractice/summarize/", { pdfUrl }, { withCredentials: true });
        
        setResult(res.data.summary); 
    } catch (error) {
        console.error("Summarize Error:", error);
        
        const errorMessage = error.response?.data?.message 
            || error.message 
            || "An unexpected error occurred while trying to summarize the PDF.";
            
        alert(`Failed to summarize: ${errorMessage}`);
    }
  }

  const generateQuiz = async () => {
    try {
        const res = await axios.post("http://localhost:5000/assistantPractice/quiz/", { pdfUrl }, { withCredentials: true });
        setResult(res.data.quiz);
    } catch (error) {
        console.error("Quiz Error:", error);
        
        const errorMessage = error.response?.data?.message 
            || error.message 
            || "An unexpected error occurred while generating the quiz.";
            
        alert(`Failed to generate quiz: ${errorMessage}`);
    }
  }

  return (
    <>
      <div>
         <h1>{pdfTitle}</h1> 
      </div>
      <div>
          <button onClick={Summarize}>Summarize</button>
          <button onClick={generateQuiz}>Generate Quiz</button>
      </div>
      <div>
          <span>{result}</span>
      </div>
    </>
  )
}

export default PdfQuery;