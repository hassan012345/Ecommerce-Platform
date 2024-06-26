import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useUserStore } from '../store/store'

export default function Nav() {
  const { cartItems, resetCartItems, isLogin, username } = useUserStore();
  const setIsLogin = useUserStore(state => state.setIsLogin);
  const setUsername = useUserStore(state => state.setUsername);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  console.log(isLogin, username)


  const handleLogout = async () => {
  try {
    const response = await fetch('http://localhost:3000/logout', {
      method: 'GET',
      credentials: 'include', // Include cookies
    });

    if (response.ok) {
      // If the logout was successful, clear the user data from the state
      setIsLogin(false);
      setUsername('');

      // Clear user data from localStorage
      localStorage.removeItem('isLogin');
      localStorage.removeItem('username');

      // Redirect to the login page
      window.location.href = '/login';
    } else {
      // Handle error
      console.error('Logout failed');
    }
  } catch (error) {
    // Handle error
    console.error('An error occurred while logging out', error);
  }
};

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
      event.preventDefault();
      navigate(`/search?query=${searchTerm}`);
      setSearchTerm("");
    };

  const clearCart = () => {
    resetCartItems();
  }


  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

            <li><a>Home</a></li>
            <li><Link to={"/shop"}>Shop</Link></li>
            <li><a>Contact Us</a></li>
            <li><a>About Us</a></li>
            <li><Link to={"/trackorder"}>Track Order</Link></li>
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost text-xl">E-Mart</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center">
          <li>
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                className="input input-bordered"
                placeholder="Search..."
              />
            </form>
          </li>
          <li><Link to={"/"}>Home</Link></li>
          {/* <li><a>Contact Us</a></li>
          <li><a>About Us</a></li> */}
          <li><Link to={"/trackorder"}>Track Order</Link></li>
          <li><Link to={"/seller/signup"}>Become a Seller</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">{cartItems.length}</span>
              </div>
            </div>
            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">{cartItems.length} Items</span>
                <div className="overflow-x-auto">
                  <table className="table table-xs">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((cart, index) => {
                        return (
                          <tr key={index}>
                            <td>{cart.title}</td>
                            <td>{cart.price}</td>
                            <td>{cart.qty}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
                {/* <span className="text-info">Subtotal: $999</span> */}
                <div className="card-actions">
                  <Link to={"/cart"} className="btn btn-primary btn-block">View cart</Link>
                  <button onClick={clearCart} className="btn btn-primary btn-block">Clear Cart</button>
                </div>
              </div>
            </div>
          </div>
          {isLogin ? (
            // If user is authenticated, render the profile dropdown
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <span>Hello, {username.split(' ')[0]}</span>
                  <img alt="Profile" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href='/profile' className="justify-between">Profile<span className="badge">New</span></a></li>
                <li><a href='#' onClick={handleLogout}>Logout</a></li>
              </ul>
            </div>
          ) : (
            // If user is not authenticated, render the login link
            <Link to="/login" className="btn btn-ghost text-lg">Login</Link>
          )}
        </div>
      </div>
    </div>
  )
}
