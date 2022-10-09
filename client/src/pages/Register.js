import React, { useState } from "react";
import "../styles/register.css"
const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function registerUser(event) {

        event.preventDefault();
        const response = await fetch("http://localhost:1337/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    }),
                });

                const data = await response.json();
                
                if(data.status == 'ok'){
                    alert('Registration Successful')
                    window.location.href = '/login'
                }
            }
    return (
        <div className="register">
            <div className="register-container">
        <h1 className="register-header">Register</h1>

        <form onSubmit={registerUser} className="register-form">
            <label htmlFor="register-name">Name</label>
            <br />
            <input 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                className="register-name"
            />
            <br />
            <label htmlFor="register-email">Email</label>
            <br />
            <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="register-email"
            />
            <br />
            <label htmlFor="register-password">Password</label>
            <br />
            <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="register-password"
            />
            <br />
            <input type="submit" value="Register"
            className="submit-btn" />

        </form>
        </div>
        </div>
    )
    }

export default Register;