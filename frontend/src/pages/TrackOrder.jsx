import React from 'react';
import { useState } from 'react';


const trackOrder = () => {
  const [orderNumber,setOrderNumber] = useState('');
  const [orderStatus,setOrderStatus] = useState('');

  const handleChange = (e) => {
    setOrderNumber(e.target.value);
  }
  // Get the order number entered by the user
  console.log(orderNumber);
  // Make an API call to fetch the order status based on the order number
  // Replace 'apiEndpoint' with the actual API endpoint
    fetch("http://localhost:3000/orders/track", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderNumber }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setOrderStatus(data);
      })

  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Track Your order</h1>
          <p className="mb-5">Enter your order number to track its status</p>
          <div className="join">
            <input className="input input-bordered join-item" onChange={handleChange} placeholder="Order Number" />
            <button className="btn btn-primary join-item rounded-r-full" onClick={trackOrder}>Track Order Now</button>
          </div>
          {orderStatus && <p className="mt-5">Order Status: {orderStatus}</p>}
        </div>
      </div>
    </div>
  )
}

export default trackOrder;