import {useEffect,useState} from "react";
import axios from "axios";

function List(){
   const [pdfsLists,setPdfsList]=useState([]);
   
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

   return (
    <>
    <div className="pdfList">   
        <ul>{
            pdfsLists.map((pdf, index)=>(
               <li key={pdf._id || index}>{pdf.title || "Untitled PDF"}</li> 
            ))
        }
        </ul>
    </div>
    </>
   )
}
export default List;