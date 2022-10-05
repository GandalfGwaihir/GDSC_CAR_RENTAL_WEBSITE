import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

export default function AboutSection(){
  const [isShown,setIsShown] = React.useState(true);
 
 const handleClick = () =>{
     setIsShown(current=>!current)
     console.log(`Function in about clicked`)
 }
 
     return (
         <div className="about">
             
 
             {/* first container having about us section */}
             <div className="aboutus">
                 
 
                 <img src="https://www.gran-turismo.com/images/c/i1adJyTt3HRmRb.jpg" alt="image1" className="about-mainimg1"/>
                 
 
                 <div className="aboutus-text">
                     <div className="abt-text">
                     <h6 className="aboutus-head1">ABOUT US</h6>
 
                     <h4 className="aboutus-head2">Luxury Cars at less</h4>
                     <p className="aboutus-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, doloremque!.</p>
                     </div>
 
 
                 <div className="aboutus-boxes">
 
                     <div className="box1">
                             <h6>Sports Car</h6>             <p className="box1-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, ad.</p>
                     
                     </div>
                             {/* <img src="./images/bluedots.png" alt="bluedots" className="dots" /> */}
                     <div className="box2">
                             <h6>Low Price</h6>             <p className="box2-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, ad.</p>
                     </div>
                     <div className="box3">
                             <h6>Easy Book</h6>             <p className="box3-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, ad.</p>
                     </div>
                 </div>
                 </div>
             
 
             </div>
 
             {/* second container having the "we bring comfort" section */}
 
             <div className="comfort-panel">
                 <div className="comfort-pic">
                 <img src="https://c.ndtvimg.com/2019-08/bs167u8_porsche-unsplash_625x300_14_August_19.jpg" alt="" className="comfortpanel-pic"/>
                 </div>
 
                 <div className="textpanel">
                 <h4 className="comfort-head1">WE BRING COMFORT</h4>
 
                 <h2 className="comfort-head2">The Best Solution for Vehicles</h2>
 
                 <p className="comfort-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, temporibus? Laudantium, cum placeat? Doloremque tempore neque officiis voluptate cupiditate quaerat eaque necessitatibus, quo in excepturi error omnis est quae maxime sint quibusdam sequi quas suscipit, nisi corporis ut ex provident?</p>
                 </div>
             </div>
 
                 <div className="comfort-dec">
                 <button className="comfortBtn">DISCOVER MORE
                 
                 </button>
                 <img src="https://identityink.com/wp-content/uploads/2021/04/Group-8.png" alt="bluedots" className="bluedots" />
                 </div>
 
             {/* Third container having the "why choose us section" */}
 
             <div className="choose-panel">
                 <div className="progress-tab">
             <h5 className="choose-head1">WHY CHOOSE US</h5>
             <h3 className="choose-head2">Best Services With The Best Work</h3>
             <p className="choose-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, corrupti?</p>
 
             {/* Progress Bar */}
                 <div className="prg-container">
                     <label htmlFor="prg1">Car Brands</label>
                     <label htmlFor="pA2"  className="prg-perc">90%</label>
                     <div className="prg1">
                         <div className="pA1"></div>
                         <div className="pA2"></div>
                     </div>
 
                     <label htmlFor="prg2">Price</label>
                     <label htmlFor="pB2"  className="prg-perc">80%</label>
                     
                     <div className="prg2">
                         <div className="pB1"></div>
                         
                         <div className="pB2"></div>
                     </div>
 
                     <label htmlFor="prg3">Quality</label>
                     <label htmlFor="pC2"  className="prg-perc3">95%</label>
                     <div className="prg3">
                         <div className="pC1"></div>
                         <div className="pC2"></div>
                     </div>
 
                     <label htmlFor="prg4">Service</label>
                     <label htmlFor="pD2"  className="prg-perc">85%</label>
                     <div className="prg4">
                         <div className="pD1"></div>
                         <div className="pD2"></div>
                     </div>
                 </div>
                 </div>
 
             {/* Advertisment Boxes */}
             <div className="ad-boxes">
                 <div className="adbox1">
                     <h3 className="box-head">Luxury Cars</h3>
                     <p className="box-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, fuga!</p>
                 </div>
                 <div className="adbox2">
                     <h3 className="box-head">Full Service</h3>
                     <p className="box-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, fuga!</p>
                 </div>
                 <div className="adbox3">
                     <h3 className="box-head">Security Lock</h3>
                     <p className="box-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, fuga!</p>
                 </div>
                 <div className="adbox4">
                     <h3 className="box-head">Full Tank</h3>
                     <p className="box-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, fuga!</p>
                 </div>
                 
             </div>
             </div>
 
         </div>
     )
 }