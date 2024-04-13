import React from 'react'
import HomeCarousel from "../components/HomeCarousel"
import ProductCarousel from "../components/ProductCarousel"
import Newsletter from "../components/Newsletter"
function Home() {
  return (
    <>
      <HomeCarousel/>
    <ProductCarousel/>
    <Newsletter/>
    </>
  )
}

export default Home