import './App.css'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import dashboard from './pages/dashboard/Dashboard'
import SellerSignup from './pages/Signup'
import SellerLogin from './pages/Login'

function App() {  

  return (
    <Router>
      
 
      <Routes>

    
        <Route path="/seller/signup" Component={SellerSignup}>
      
        </Route>

        <Route path="/seller/login" Component={SellerLogin}>
      
        </Route>

        <Route path="/dashboard" Component={dashboard}>
        </Route>
       
      </Routes>

  </Router>
   
  
  )
}

export default App
