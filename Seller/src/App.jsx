import './App.css'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import SellerDashboard from './pages/Seller/SellerDashboard'
import dashboard from './pages/Seller/dashboard/Dashboard'
import SellerSignup from './pages/Seller/Signup'
import SellerLogin from './pages/Seller/Login'

function App() {  

  return (
    <Router>
      
 
      <Routes>

    
        <Route path="/seller/signup" Component={SellerSignup}>
      
        </Route>

        <Route path="/seller/login" Component={SellerLogin}>
      
        </Route>

        <Route path="/seller/dashboard" Component={SellerDashboard}>
      
        </Route>

        <Route path="/dashboard" Component={dashboard}>
      
        </Route>
       
      </Routes>

  </Router>
   
  
  )
}

export default App
