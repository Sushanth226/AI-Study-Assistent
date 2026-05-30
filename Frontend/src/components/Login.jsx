import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login(){
    const navigate = useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const sendDetails=async(e)=>{
        e.preventDefault();
        if(!email && !password ){
            alert("The Email Or Password is not given");
        }else{
            try{
                await axios.post("http://localhost:5000/auth/login",{
                    email,
                    password
                }, { withCredentials: true })
                console.log("Login Completed")
                // Need to import useNavigate for this
                navigate("/dashboard");
            }catch(error){
                console.log(error);
                const resData = error?.response?.data;
                const errorMsg = resData?.message || resData?.error || (typeof resData === 'string' ? resData : null) || error.message || "Login failed";
                alert(errorMsg);
            }
        }
        
    }
    return(
    <>
    <h1>Login</h1>
    <form onSubmit={sendDetails}>
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/>
        <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password..."/>
        <button type="submit">Login</button>
    </form>
    <br/>
    <p>If don't have a account</p>
    <Link to="/register">Register</Link>
    </>
)
}
export default Login;