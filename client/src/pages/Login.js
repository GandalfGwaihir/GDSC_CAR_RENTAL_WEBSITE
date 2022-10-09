import React, { useState } from "react";
import "../styles/login.css"
import { Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
const Register = () => {

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function loginUser(event) {

        event.preventDefault();
        const response = await fetch("http://localhost:1337/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                
                },
                body: JSON.stringify({
                    
                    email,
                    password,
                    }),
                });
                const data = await response.json();

                if(data.user){
                    localStorage.setItem('token', data.token)
                    alert('Login Successful')
                    window.location.href = '/home'
                } else {
                    alert('Please check your email and password')   

                }

                console.log(data);
            }
    return (
        <div className="login">
            
            <div className="login-container">
        <h3 className="login-header">Login</h3>

        <form onSubmit={loginUser} className="login-form">
            
            <br />
            <label htmlFor="login-email">Email</label>
            <br />
            <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="login-email"
            />
            <br />
            <label htmlFor="login-password">Password</label>
            <br />
            <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="login-password"
            />
            
            <p>
            <Link to="/register">
                  <i ></i>Not Registered yet? Click here to register
            </Link>
            </p>
            
            <br />
            <input type="submit" value="Login" 
            className="login-submit"/>

            <Routes>
            <Route path ="/register" element={<Register />} >
             </Route>   
            </Routes>
            

        </form>
        </div>
        </div>
    )
    }

export default Register;