import React from 'react';
import './assets/style.css';
import Mynavbar_offer from './Mynavbar/Navbar_offer';
import Mynavbar_main from './Mynavbar/Navbar_main';
import MyheroSection from './HeroSection/heroSection';
import MybrandLogos from './BrandLogos/brandLogos';
import MynewArrival from './NewArrival/newArrival';
import MyshopCollection from './ShopCollection/shopCollection';
import MybestSeller from './BestSeller/bestSeller';
import MybannerSection from './BannerSection/bannerSection';
import MyvalueSection from './ValuesSection/valueSection';
import MyinstgramSection from './InstgramSection/instgramSection';
import Mybanner2Section from './Banner2Section/banner2Section';
import MyfooterSection from './FooterSection/footerSection';
import { Router } from 'react-router-dom';
import Dasboard from './Mynavbar/Dashboard';
function App() {
  return (
    <React.Fragment>
      <Mynavbar_offer />
      <Mynavbar_main />
      <MyheroSection />
      <MybrandLogos />
      <MynewArrival />
      <MyshopCollection />
      <MybestSeller />
      <MybannerSection/>
      <MyvalueSection/>
      <MyinstgramSection/>
      <Mybanner2Section/>
      <MyfooterSection/>
    </React.Fragment>
  );
}

export default App;
