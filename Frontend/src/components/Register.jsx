import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register(){
    const navigate=useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const sendDetails=async(e)=>{
        e.preventDefault();
        if(!email && !name && !password ){
            alert("The Name Or Email Or Password is not given");
        }else{
            try{
                await axios.post("http://localhost:5000/auth/register",{
                    name,
                    email,
                    password
                }, { withCredentials: true })
                console.log("Registration Completed")
                navigate("/dashboard");
            }catch(error){
                console.log(error);
                const resData = error?.response?.data;
                const errorMsg = resData?.message || resData?.error || (typeof resData === 'string' ? resData : null) || error.message || "Registration failed";
                alert(errorMsg);
            }
        }
        
    }
    return(
    <>
    <h1>Register</h1>
    <form onSubmit={sendDetails}>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Name"/>
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/>
        <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password..."/>
        <button type="submit">Register</button>
    </form>
    <br/>
    <p>If already have a account</p>
    <Link to="/login">Login</Link>
    </>
    )
}
export default Register;