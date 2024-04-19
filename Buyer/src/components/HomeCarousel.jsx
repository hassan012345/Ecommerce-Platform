import React from 'react'
import "../css/homeCarousel.css"
function Carousel() {
  return (
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
  
    <img id='discountImg' src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className="carousel-content mx-[70px] md:mx-0">
  <h1 className="mb-5 text-2xl !text-red font-bold ">Your Extraordinary One-Stop Shop!</h1>
  <p className="mb-5 hidden lg: block">Elevate Your Shopping Experience</p>
      <a href={"/shop"} className="btn btn-primary">Explore Now</a>
  </div>
    <img src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className="carousel-content mx-[70px] md:mx-0">
  <h1 className="mb-5 text-2xl !text-red font-bold ">Your Extraordinary One-Stop Shop!</h1>
  <p className="mb-5 hidden lg: block">Elevate Your Shopping Experience</p>
      <a href={"/shop"} className="btn btn-primary">Explore Now</a>
  </div>
    <img src="https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className="carousel-content mx-[70px] md:mx-0">
  <h1 className="mb-5 text-2xl !text-red font-bold ">Your Extraordinary One-Stop Shop!</h1>
  <p className="mb-5 hidden lg: block">Elevate Your Shopping Experience</p>
      <a href={"/shop"} className="btn btn-primary">Explore Now</a>
  </div>
    <img src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  )
}

export default Carousel;