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
        <div className="flex-center animate-fade-in">
            <div className="auth-card text-center">
                <h1 className="mb-2">Create Account</h1>
                <p className="subheading mb-6">Join your AI Study Assistant</p>
                
                <form onSubmit={sendDetails}>
                    <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input 
                            className="form-control"
                            type="text" 
                            value={name} 
                            onChange={(e)=>{setName(e.target.value)}} 
                            placeholder="John Doe"
                        />
                    </div>
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
                    <button type="submit" className="btn btn-primary btn-lg w-full mb-4">Register</button>
                </form>
                
                <p className="caption">
                    Already have an account? <Link to="/login" className="font-medium" style={{color: 'var(--color-primary)'}}>Log in</Link>
                </p>
            </div>
        </div>
    )
}
export default Register;