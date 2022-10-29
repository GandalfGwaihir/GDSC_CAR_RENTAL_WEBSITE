import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function productCard(){
    return(
        <>
        <Header/>
        <div className="productcard">
            <h1>This is the mock product card</h1>
        </div>
        <Footer/>
        </>
    )
}