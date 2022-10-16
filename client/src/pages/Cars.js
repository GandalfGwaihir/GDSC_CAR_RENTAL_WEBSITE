import "../styles/cars.css"
import data from "../assets/data/MOCK_DATA.js"
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
                        <img  src = "https://img.icons8.com/material-rounded/344/rupee.png" alt="price"  width="25" height="25"/>
                        {val.price}
                    </div>
                    <div className="rating">
                        <img src ="https://img.icons8.com/arcade/344/experimental-star-arcade.png" alt="star" width="25" height="25" class="pb-1.5" />
                        {val.rating}
                    </div>
                </h3>
                <hr />
                
                <div className="card-stats">
                    <div className="miles">
                    <img src="https://img.icons8.com/ios/344/speedometer.png" alt="miles" width="25" height="25" /> {val.miles}
                    </div>

                    <div className="auto">
                    <img src="https://img.icons8.com/color/344/automatic-gearbox-warning.png" alt="auto" width="25" height="25" class="pb-1.5"/> Auto
                    </div>

                    <div className="petrol">
                    <img src="https://img.icons8.com/fluency/2x/gas-station.png" alt="petrol" width="25" height="25" /> Petrol
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