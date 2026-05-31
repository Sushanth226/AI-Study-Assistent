import {Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
function App(){
   return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    {/* <Route path="/logout" element={<Logout/>}/> */}
    <Route path="/pdfQuery/:id" element={}/>
   </Routes>
   </>

   )
}
export default App;