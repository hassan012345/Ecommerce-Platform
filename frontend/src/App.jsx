import { createFactory, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useLocation} from 'react-router-dom'
import './App.css'
import Nav from "./components/Nav"
import Footer from './components/Footer'

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home'
import Shopping from './pages/Shopping'
import SingleProduct from './pages/SingleProduct'
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'
import OrderConfirm from './pages/OrderConfirm'
import Search from './pages/Search'
import TrackOrder from './pages/TrackOrder'
import Login from './pages/Login'
import Signup from './pages/Signup'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Nav/>
 
      <Routes>

        <Route path="/" Component={Home}>
      
        </Route>
        <Route path="/login" Component={Login}>
      
        </Route>

        <Route path="signup" Component={Signup}>
      
        </Route>
        <Route path="/search" Component={Search}>
      
        </Route>

        <Route path="/shop" Component={Shopping}>
      
        </Route>



        <Route path="/product/:id" Component={SingleProduct}>
      
        </Route>


        <Route path="/checkout" Component={Checkout}>
      
        </Route>



        <Route path="/cart" Component={Cart}>
      
        </Route>

        <Route path="/trackorder" Component={TrackOrder}>
      
        </Route>

        <Route path="/confirm-order" Component={OrderConfirm}>
      
        </Route>
       
      </Routes>
    
    <Footer/>

  </Router>
   
  
  )
}

export default App
