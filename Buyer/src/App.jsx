import './App.css'
import Nav from "./components/Nav"
import Footer from './components/Footer'
import {ToastContainer} from 'react-toastify'
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
import Signup from './pages/Buyer/Signup'
import CompareProduct from './components/CompareProduct';

function App() {  
 
  return (
    <>
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

        <Route path="/confirm-order" Component={OrderConfirm}>
      
        </Route>

        <Route path="/compare" Component={CompareProduct}>

        </Route>
       
      </Routes>
      <Footer/>
  </Router>
   
  </>
  )
}

export default App
