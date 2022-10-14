import "../styles/cars.css"
import data from "../assets/data/MOCK_DATA.json"
import React from "react"
import { useState } from "react"

import { Link } from "react-router-dom"

export default function Cars() {
   
      const [searchterm,setSearchterm] = React.useState('')



    return(
        <div className="carspage">
                <h1 className="cars-header">Car Rental</h1>

                <input type="text" placeholder="Search" onChange={event => {
                    setSearchterm(event.target.value)
                }} />
            <div className="cars">
            

                {data.filter((val)=>{
                if(searchterm == ""){return val}
                else if(val.brand.toLowerCase().includes(searchterm.toLowerCase()) || val.model.toLowerCase().includes(searchterm.toLowerCase())){
                    return val
                }
            }).map((val,key) => {
                return (
                <div className="cards-container">
                <div className="card" key={key}>
               

                <img src={val.image} alt="car-image" className="card-image" />

                <h8>Sports Car</h8>

                <h4 className="card--header">{val.brand} {val.model}</h4>
                <h3 className="card--price--rating">
                    <div className="price">
                        <img src="../assets/all-images/rupees.png" alt="rupees" />
                        {val.price}
                    </div>
                    <div className="rating">
                        <img src="../assets/all-images/rating.png" alt="star" />
                        {val.rating}
                    </div>
                </h3>
                <hr />
                
                <div className="card-stats">
                    <div className="miles">
                    <img src="../assets/all-images/miles.png" alt="miles" /> {val.miles}
                    </div>

                    <div className="auto">
                    <img src="../assets/all-images/auto.png" alt="auto" /> 
                    </div>

                    <div className="petrol">
                    <img src="../assets/all-images/petrol.png" alt="petrol" />
                    </div>
                </div>

                <div className="cardBtn">
                    <Link to="#">
                    <p className="cardBtn-text">
                    Rent Now
                    </p>
                    </Link>
                </div>

                </div>
                </div>
                )
            })}
            </div>
            </div>
        
    )
}