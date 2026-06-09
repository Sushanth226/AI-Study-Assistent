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
        <div className="flex-center animate-fade-in">
            <div className="auth-card text-center">
                <h1 className="mb-2">Welcome Back</h1>
                <p className="subheading mb-6">Log in to your account</p>
                
                <form onSubmit={sendDetails}>
                    <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input 
                            className="form-control"
                            type="email" 
                            value={email} 
                            onChange={(e)=>{setEmail(e.target.value)}} 
                            placeholder="you@example.com"
                        />
                    </div>
                    <div className="form-group mb-6">
                        <label className="form-label">Password</label>
                        <input 
                            className="form-control"
                            type="password" 
                            value={password} 
                            onChange={(e)=>{setPassword(e.target.value)}} 
                            placeholder="••••••••"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg w-full mb-4">Login</button>
                </form>
                
                <p className="caption">
                    Don't have an account? <Link to="/register" className="font-medium" style={{color: 'var(--color-primary)'}}>Sign up</Link>
                </p>
            </div>
        </div>
    )
}
export default Login;