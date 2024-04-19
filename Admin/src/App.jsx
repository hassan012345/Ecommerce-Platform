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

import Home from './pages/Buyer/Home'
import Shopping from './pages/Buyer/Shopping'
import SingleProduct from './pages/Buyer/SingleProduct'
import Checkout from './pages/Buyer/Checkout'
import Cart from './pages/Buyer/Cart'
import OrderConfirm from './pages/Buyer/OrderConfirm'
import Search from './pages/Buyer/Search'
import TrackOrder from './pages/Buyer/TrackOrder'
import Login from './pages/Buyer/Login'
import SellerDashboard from './pages/Seller/SellerDashboard'
import Signup from './pages/Buyer/Signup'
import dashboard from './pages/Seller/dashboard/Dashboard'
import SellerSignup from './pages/Seller/Signup'
import SellerLogin from './pages/Seller/Login'

function App() {  
const location = useLocation()
const whiteListedPath = ['/dashboard']
const shouldRenderNavandFooter = !whiteListedPath.includes(location.pathname)

  return (
    <Router>
      
    {shouldRenderNavandFooter && <Nav/>}
 
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

        <Route path="/confirm-order" Component={OrderConfirm}>
      
        </Route>

        <Route path="/seller/signup" Component={SellerSignup}>
      
        </Route>

        <Route path="/seller/login" Component={SellerLogin}>
      
        </Route>

        <Route path="/seller/dashboard" Component={SellerDashboard}>
      
        </Route>

        <Route path="/dashboard" Component={dashboard}>
      
        </Route>
       
      </Routes>
    
    {shouldRenderNavandFooter && <Footer/>}

  </Router>
   
  
  )
}

export default App
