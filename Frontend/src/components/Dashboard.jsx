import {useState} from "react";
import axios from "axios";
import List from "./List";
import {Link} from "react-router-dom";
import Logout from "./Logout";
function Dashboard(){
    const [pdf,setPdf]=useState(null);
    
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
            formData.append("pdf", pdf);
            formData.append("title", pdf.name); // The backend Pdf schema requires a title
            
            const pdfSubmit=await axios.post("http://localhost:5000/pdf/upload", formData, { 
                withCredentials: true,
                headers: { "Content-Type": "multipart/form-data" }
            });
            console.log(`The pdf submitted ${pdfSubmit}`);
            alert("PDF submitted successfully");
        }
        catch(error){
            console.error(error);
            const resData = error?.response?.data;
            const errorMsg = resData?.message || resData?.error || (typeof resData === 'string' ? resData : null) || error.message || "Submitting the pdf failed";
            alert(errorMsg);
        }
    }
    return(
        <>
        <h1>DashBoard</h1>
        <div className="logout">
          <Logout/>
        </div>
        <div className="logout">

        </div>
        <div className="pdfUpload">
            <input type="file" accept="application/pdf" placeholder="Upload a pdf" onChange={uploadPdf}/>
            <button onClick={submitPdf}>Submit</button>
        </div>
        <List/>
        </>
    )
}
export default Dashboard;