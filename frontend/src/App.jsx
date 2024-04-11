import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from "./components/Nav"
import HomeCarousel from './components/HomeCarousel'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import ProductCarousel from './components/ProductCarousel'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Nav/>
    <HomeCarousel/>
    <ProductCarousel/>
    <Newsletter/>
    <Footer/>
   </div>
  )
}

export default App
