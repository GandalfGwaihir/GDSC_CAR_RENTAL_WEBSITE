import React, {useEffect } from 'react' 
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import HeroSlider from '../components/UI/HeroSlider'
import '../styles/Home.css'


const Home = () => {
  return (
    <>
    <Header/>
    <div className="hero">
    <div className="panel-left">
      <h4 className='home-header1'>THE BEST WAY OF RENTING A CAR</h4>
      <h1 className='home-header2'>Need a ride? We have you all covered</h1>

      <p className='homeBtn'>MORE ABOUT US</p>
      <img src="../assets/all-images/bluedots.png" alt="bluedots" className='bluedots'/>
    </div>
    <div className="panel-right">
    <HeroSlider/>
    </div>
    </div>

    <div className="pop-brands">
   <h5>Popular brands</h5>
   <div className="merc">
    <h1>MERCEDES</h1>
    <img src="../assets/all-images/merc.jpg" alt="merc" />
   </div>

   <div className="toyota">
    <h1>TOYOTA</h1>
    <img src="../assets/all-images/toyoto.jpg" alt="merc" />
   </div>

   <div className="lamb">
    <h1>LAMBORGHINI</h1>
    <img src="../assets/all-images/lamb.png" alt="merc" />
   </div>

   <div className="tata">
    <h1>TATA</h1>
    <img src="../assets/all-images/tata.jpg" alt="merc" />
   </div>
    </div>

    <Footer/>
    </>
  )
    }
    export default Home;



// export default Home;

