import React from "react";
import { Link } from "react-router-dom";
import "../styles/adminpanel.css"
export default function adminPanel(){
    return(
        <>
         
        <div className="adminpanel">
            <div className="adminphoto">
            <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg" alt="signup" className="adminpic"/>
            </div>
            
            <div className="panel-container">
            <h1 className="panel-header">Admin Panel</h1>
            <div className="adminbuttons">
            <div className="panelBtn">
                <Link to="/admin/cars" >
                <p>Cars</p>
                </Link>
            </div>
            {/* <div className="panelBtn">
                <Link to="/admin/users" >
                <p>Users</p>
                </Link>
            </div>
            <div className="panelBtn">
                <Link to="/admin/testimonials" >
                <p>Testimonials</p>
                </Link>
            </div> */}
            </div>
            </div>
        </div>
        </>
    )
}