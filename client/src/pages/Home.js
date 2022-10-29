import React from "react";
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import  bmw from "../assets/all-images/bmw.jpg";
import  lamborghini from "../assets/all-images/lamborghini.jpg";
import  tata from "../assets/all-images/tata.jpg";
import  toyoto from "../assets/all-images/toyoto.jpg";

export default function Home() {
    return (
        <>
        <Header/>
        
        {/* <HeroSlider/> */}
       {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        
        <div className="comfort-panel">
                 
                   
   
                   <div className="textpanel">
                   <h4 className="comfort-head1">THE BEST WAY OF RENTING A CAR</h4>
   
                   <h2 className="comfort-head2">Need a ride? We have you all covered</h2>
                   
                   <button className="comfortBtn" > MORE ABOUT US
                   
                   </button>
                   {/* <HeroSlider/> */}
                   
                   <img src="https://identityink.com/wp-content/uploads/2021/04/Group-8.png" alt="bluedots" className="bluedots1" />
                   
   
                   
                   </div>
                   
         
               </div>
        
               {/* <FindCarForm/> */}
                   
          
          <div className="popularname">
        <div className="popularname1">Popular Brands
        </div>
        <div className="Mercedes">
        <h2 className='car1'>MERCEDES</h2>
        <img src={bmw} alt="" className='Mercedesimg' />
        </div>
        <div className="tesla">
        <h2 className='car2'>TOYOTO</h2>
        <img src={toyoto} alt="" className='toyotoimg' />
        </div>
        <div className="lamborgini">
        <h2 className='car3'>LAMBORGHINI</h2>
        <img src={lamborghini} alt="" />
        </div>
        <div className="tata">
        <h2 className='car4'>TATA</h2>
        <img src={tata} alt="" className='tataimg' />
        
        </div>
      </div>
        </section> 
        <Footer/>
        </>
    );
    }