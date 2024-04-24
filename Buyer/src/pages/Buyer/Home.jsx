import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeCarousel from "../../components/HomeCarousel";
import ProductCarousel from "../../components/ProductCarousel";
import Newsletter from "../../components/Newsletter";

function Home() { 
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/",{
      method: "GET",
      credentials: "include",
    })
    .then((response) => {
      if(response.status != 200) {
        navigate("/login");
      }
    })
  }, []);
  return (
    <>
      <HomeCarousel/>
      <ProductCarousel/>
    </>
  );
}

export default Home;
