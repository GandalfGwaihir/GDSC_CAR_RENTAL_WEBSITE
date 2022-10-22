import React, {useEffect } from 'react' 
import jwt_decode from "jwt-decode";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import '../styles/Home.css';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
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
import  bmw from "../assets/all-images/bmw.jpg";
import  lamborghini from "../assets/all-images/lamborghini.jpg";
import  tata from "../assets/all-images/tata.jpg";
import  toyoto from "../assets/all-images/toyoto.jpg";
import driveImg from "../assets/all-images/drive.jpg";
import HomeSection from '../components/UI/HomeSection';
import img1 from "../assets/all-images/img1.jpg";



const Home = () => {
    return (
        <>
       
       {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        
      <div className="comfort-panel">
                 <div className="comfort-pic">
                 <img src={img1} alt="" className="comfortpanel-pic"/>
                 </div>
 
                 <div className="textpanel">
                 <h4 className="comfort-head1">THE BEST WAY OF RENTING A CAR</h4>
 
                 <h2 className="comfort-head2">Need a ride? We have you all covered</h2>
                 
                 <button className="comfortBtn" > MORE ABOUT US
                 
                 </button>
                 
                 <img src="https://identityink.com/wp-content/uploads/2021/04/Group-8.png" alt="bluedots" className="bluedots" />
                 
 
                 
                 </div>
             </div>
 
                 
        {/* <div className='frontpagepara'>THE BEST WAY OF RENTING A CAR</div>
        <div className="frontpagepara1">Need a ride? We have you all covered </div>
        <div className="comfort-dec">
                 <button className="comfortBtn">MORE ABOUT US
                 
                 </button>
                 <img src="https://identityink.com/wp-content/uploads/2021/04/Group-8.png" alt="bluedots" className="bluedots" />
                 </div> */}
        {/* <img src="https://identityink.com/wp-content/uploads/2021/04/Group-8.png" alt="bluedots" className="bluedots" /> */}
        
        {/* <HeroSlider /> */}
        
        

        {/* <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car </h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div> */}
      </section>
        {/* <Testimonial/> */}
       
        {/* <Slider/> */}
        {/* ========== services section ============ */}
      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section> */}
      {/* =========== testimonial section =========== */}
      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section> */}
      
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
   
        
        </>
      )
    }
    export default Home;



// export default Home;

