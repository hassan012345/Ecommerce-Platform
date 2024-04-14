import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import HomeCarousel from "../components/HomeCarousel";
import ProductCarousel from "../components/ProductCarousel";
import Newsletter from "../components/Newsletter";

function Home() { 
  return (
    <>
      <HomeCarousel/>
      <ProductCarousel/>
      {/* <Newsletter/> */}
    </>
  );
}

export default Home;
