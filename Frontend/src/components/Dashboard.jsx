import {useState} from "react";
import axios from "axios";
import List from "./List";
import Logout from "./Logout";
function Dashboard(){
    const [pdf,setPdf]=useState(null);
    const [refreshList, setRefreshList] = useState(0);
    
    const uploadPdf=(e)=>{
        if (e.target.files && e.target.files[0]) {
            setPdf(e.target.files[0]);
        }
    }
    
    const submitPdf=async ()=>{
        if (!pdf) {
            alert("Please select a PDF first");
            return;
        }
        try
        {
            const formData = new FormData();
            // Sanitize filename to prevent Cloudinary public_id errors with special characters
            const sanitizedName = pdf.name.replace(/[^a-zA-Z0-9.\-_]/g, '_');
            formData.append("pdf", pdf, sanitizedName);
            formData.append("title", pdf.name); // The backend Pdf schema requires a title
            
            const pdfSubmit=await axios.post("http://localhost:5000/pdf/upload", formData, { 
                withCredentials: true,
                headers: { "Content-Type": "multipart/form-data" }
            });
            console.log(`The pdf submitted ${pdfSubmit}`);
            alert("PDF submitted successfully");
            setRefreshList(prev => prev + 1);
        }
        catch(error){
            console.error(error);
            const resData = error?.response?.data;
            const errorMsg = resData?.message || resData?.error || (typeof resData === 'string' ? resData : null) || error.message || "Submitting the pdf failed";
            alert(errorMsg);
        }
    }
    return(
        <div className="app-container animate-fade-in">
            <header className="app-header">
                <h1>Dashboard</h1>
                <Logout/>
            </header>
            
            <main className="container main-content">
                <section className="mb-8">
                    <div className="card text-center">
                        <h2 className="mb-4">Upload Study Material</h2>
                        <div className="upload-area mb-4">
                            <input 
                                type="file" 
                                accept="application/pdf" 
                                onChange={uploadPdf}
                                className="upload-input-overlay"
                                title="Click to upload a PDF"
                            />
                            <p className="subheading mb-2">Drag and drop your PDF here, or click to browse</p>
                            <p className="caption" style={{color: pdf ? 'var(--color-primary)' : ''}}>
                                {pdf ? `Selected: ${pdf.name}` : "Supports .pdf files"}
                            </p>
                        </div>
                        <button 
                            onClick={submitPdf} 
                            className="btn btn-primary btn-lg" 
                            disabled={!pdf}
                        >
                            Process Document
                        </button>
                    </div>
                </section>

                <section>
                    <h2 className="mb-4">Your Documents</h2>
                    <List refreshTrigger={refreshList}/>
                </section>
            </main>
        </div>
    )
}
export default Dashboard;