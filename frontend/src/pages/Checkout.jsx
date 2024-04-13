import React, {useState, useEffect} from 'react'
import { useUserStore } from '../store/store'
import { Link } from 'react-router-dom';

function Checkout() {
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
    <div className='flex justify-center items-center flex-col'>
      <ul className="my-20 steps">
  <li className="step step-primary">Cart</li>
  <li className="step step-primary">Checkout</li>
  <li className="step">Order Confirmed</li>
</ul>
<h1 className='my-10 text-5xl font-bold text-center'>Enter your details</h1>

<div className='w-[100%] flex justify-around items-center'>
<div id='form'>



<label className="my-5 form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Name: </span>
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
</label>


<label className="my-5 form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">City:</span>
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  
</label>

<label className="my-5 form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Postal Code:</span>
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  
</label>


<label className="my-5 form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Province</span>
 
  </div>
  <select className="select select-bordered">
    <option disabled selected>Pick one</option>
    <option>Punjab</option>
    <option>Sindh</option>
    <option>KPK</option>
    <option>Balouchistan</option>
  </select>
  
</label>


<label className="my-5 form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Address:</span>
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  
</label>

<label className="my-5 form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Payment Method: </span>
 
  </div>
  <select className="select select-bordered">
    <option disabled selected>Pick one</option>
    <option>Cash On Delivery</option>
    
  </select>
  
</label>

</div>


<div id='summary'>
<h1 className='my-10 text-3xl font-bold text-center'>Order Summary</h1>
          
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

  <div className='divider'></div>
<div className='flex flex-col'>

          <span className="text-info">Subtotal: Rs. {totalPrice}</span>
          <span className="text-info">Shipping: Rs. {shippingCharges}</span>
          <span className="text-info">Total: Rs. {totalPrice+shippingCharges}</span>

</div>

<Link to={"/confirm-order"} className='my-10 btn btn-primary'>Confirm Order</Link>

</div>

</div>
</div>

    </div>

  )
}

export default Checkout