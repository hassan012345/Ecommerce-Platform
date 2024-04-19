import React, { useEffect, useState } from 'react'
import { useUserStore } from '../../store/store'
import { Link } from 'react-router-dom';

function Cart() {
  const shippingCharges = 100;
  const [totalPrice, setTotalPrice] = useState(0)
  const {cartItems} = useUserStore();

  const calculateCartPrice = () => {
    let price = 0;
    cartItems.map(item => {
      price += (item.qty) * item.price;
    })

    setTotalPrice(price);
  }

  useEffect(() => {
    calculateCartPrice();
  }, [])
  
  return (
    <div className='flex items-center flex-col' style={{
      minHeight: "100vh"
    }}>

<ul className="my-20 steps">
  <li className="step step-primary">Cart</li>
  <li className="step">Checkout</li>
  <li className="step">Order Confirmed</li>
</ul>

<h1 className='my-10 text-5xl font-bold text-center'>Cart</h1>
        
<div className="mx-5 overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Id</th>
        <th>Product Name</th>
        <th>Unit Price</th>
        <th>Qty</th>
        <th>Final Price</th>
      </tr>
    </thead>
    <tbody>
      {
        cartItems.map((cart, index)=> {
          return (
            <tr key={index}>
            <th>{cart.id}</th>
            <td>{cart.title}</td>
            <td>Rs. {cart.price}</td>
            <td>{cart.qty}</td>
            <td>Rs. {cart.qty*cart.price}</td>
          </tr>
          )
        })
      }

      
    </tbody>
  </table>
</div>


<div className='divider'></div>

          <span className="text-info">Subtotal: Rs. {totalPrice}</span>
          <span className="text-info">Shipping: Rs. {shippingCharges}</span>
          <span className="text-info">Total: Rs. {totalPrice+shippingCharges}</span>


<Link className='btn btn-primary my-10' to={"/checkout"}>Go to Checkout</Link>
    </div>
  )
}

export default Cart