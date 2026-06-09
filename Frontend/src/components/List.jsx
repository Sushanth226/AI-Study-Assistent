import {useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function List({ refreshTrigger }){
   const [pdfsLists,setPdfsList]=useState([]);
   const navigate=useNavigate();
   const getPdfs=async()=>await axios.get("http://localhost:5000/pdf/getPdfs",{ withCredentials: true });

   useEffect(()=>{
      const fetchPdfs = async () => {
         try {
            const response = await getPdfs();
            setPdfsList(response.data);
         } catch(error) {
            console.error( error);
            alert("Error fetching PDFs:");
         }
      };
      fetchPdfs();
   }, [refreshTrigger]);
   const PdfQuery=(pdf)=>{
      navigate(`/pdfQuery/${pdf._id || pdf.id || 'unknown'}`,{
      state:{
          pdfUrl:pdf.pdfUrl,
          pdfTitle:pdf.title
      }})
   }
   const Delete=async(pdf)=>{
      try{
      await axios.delete(`http://localhost:5000/pdf/deletePdf/${pdf._id}`,{withCredentials:true});
      setPdfsList(prev => prev.filter(p => p._id !== pdf._id));
      }catch(error){
         console.log(error);
         alert("Error while Deleting the pdf",error);
      }
   }
   return (
    <div className="card-grid animate-slide-up">
        {pdfsLists.length === 0 ? (
            <p className="caption text-center w-full" style={{gridColumn: '1 / -1', padding: '2rem 0'}}>
                No documents found. Upload a PDF to get started.
            </p>
        ) : (
            pdfsLists.map((pdf, index)=>(
               <div className="card card-hoverable doc-card" key={pdf._id || index}>
                   <div className="doc-card-title" title={pdf.title || "Untitled PDF"}>
                       {pdf.title || "Untitled PDF"}
                   </div>
                   <div className="doc-card-actions mt-4">
                       <button onClick={() => PdfQuery(pdf)} className="btn btn-primary w-full">Learn</button> 
                       <button onClick={() => Delete(pdf)} className="btn btn-outline btn-danger w-full">Delete</button>
                   </div>
               </div> 
            ))
        )}
    </div>
   )
}
export default List;