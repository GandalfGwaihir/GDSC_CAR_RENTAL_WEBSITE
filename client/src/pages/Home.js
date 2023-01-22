import React, {useEffect } from 'react' 

import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import '../styles/Home.css';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
// import Slider1 from '../components/Slider/Slider1.js';
import Testimonial from '../components/UI/Testimonal';


import Slider from './Slider';
import BtnSlider from './BtnSlider';
import Sidebar from '../components/UI/Sidebar'
import "../styles/hero-slider.css"
import HeroSlider from '../components/UI/HeroSlider';
import "../styles/find-car-form.css";
import FindCarForm from '../components/UI/FindCarForm';
import ServicesList from "../components/UI/ServicesList";
import "../styles/Services-list.css";

import  mercedes from "../assets/all-images/mercedes.jpg";
import   lamborghini from "../assets/all-images/lamborghini.jpg";
import  Audi from "../assets/all-images/Audi.jpg";

import driveImg from "../assets/all-images/drive.jpg";
import HomeSection from '../components/UI/HomeSection';
import bluedots from "../assets/all-images/bluedots.png";
import bmw from "../assets/all-images/bmw.jpg";
import toyoto from "../assets/all-images/toyoto.jpg";


const Home = () => {
  return (
    <>
    <Header/>
    <div className="hero">
    <div className="panel-left">
      <h4 className='home-header1'>THE BEST WAY OF RENTING A CAR</h4>
      <h1 className='home-header2'>Need a ride? We have you all covered</h1>

      <p className='homeBtn'>MORE ABOUT US</p>
      {/* <img src={bluedots} alt="bluedots" className='bluedots'/> */}
    </div>
    <div className="panel-right">
    <Slider/>
    </div>
    </div>

    <div className="pop-brands">
   <h5>Popular brands</h5>
   <div className="merc">
    <h1>Audi</h1>
    <img src={Audi} alt="merc" classname="merc"/>
   </div>

   <div className="BMW">
    <h1>BMW</h1>
    <img src={bmw} alt="BMW" classname="BMW1" />
   </div>

   <div className="lamb">
    <h1>LAMBORGHINI</h1>
    <img src={ lamborghini} alt="lamb" classname="lamb1" />
   </div>

   <div className="toyota">
    <h1>MERCEDES</h1>
    <img src={mercedes} alt="mercedes" classname="mercedes1" />
   </div>
    </div>

    <Footer/>
    </>
  )
    }
    export default Home;



// export default Home;

