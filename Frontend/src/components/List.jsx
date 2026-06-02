import {useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function List(){
   const [pdfsLists,setPdfsList]=useState([]);
   const navigate=useNavigate();
   const getPdfs=async()=>await axios.get("http://localhost:5000/pdf/getPdfs",{ withCredentials: true });

   useEffect(()=>{
      const fetchPdfs = async () => {
         try {
            const response = await getPdfs();
            setPdfsList(response.data);
         } catch(error) {
            console.error("Error fetching PDFs:", error);
         }
      };
      fetchPdfs();
   },[pdfsLists]);
   const PdfQuery=(pdf)=>{
      navigate(`/pdfQuery/${pdf._id || pdf.id || 'unknown'}`,{
      state:{
          pdfUrl:pdf.pdfUrl,
          pdfTitle:pdf.title
      }})
   }

   return (
    <>
    <div className="pdfList">   
        <ul>{
            pdfsLists.map((pdf, index)=>(
               <li key={pdf._id || index}>{pdf.title || "Untitled PDF"} <button onClick={() => PdfQuery(pdf)}>Learn</button></li> 
            ))
        }
        </ul>
    </div>
    </>
   )
}
export default List;