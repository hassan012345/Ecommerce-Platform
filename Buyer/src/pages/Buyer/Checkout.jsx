import React, { useState, useEffect } from 'react'
import { useUserStore } from '../../store/store'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const shippingCharges = 100;
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0)
  const [shippingAddress, setShippingAddress] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('Cash On Delivery')

  const { resetCartItems } = useUserStore();
  const { cartItems } = useUserStore();
  console.log(cartItems)
  const calculateCartPrice = () => {
    let price = 0;
    cartItems.map(item => {
      price += (item.quantity) * item.price;
    })

    setTotalPrice(price);
  }

  useEffect(() => {
    calculateCartPrice();
  }, [])

  const confirmOrder = async (e) => {
  if (window.confirm('Are you sure you want to confirm this order?')) {
    try {
      const orderNumber = Math.floor(Math.random() * 1000000)
      const response = await fetch('http://localhost:3000/orders', {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          orderNumber,
          totalPrice: totalPrice,
          taxAmount: 100,
          discount: 10,
          products: cartItems.map(item => ({ quantity: item.quantity, product: item.id })),
          shippingAddress,
          paymentMethod
        })
      })
      if (response.ok) {
        alert('Order confirmed successfully')
        resetCartItems();
        navigate('/confirm-order', { state: { orderNumber } });

      }
      else {
        alert('Something went wrong')
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred while confirming your order. Please try again.')
    }
  }
  else {
    e.preventDefault();
  }
}
  return (
    <div className='flex justify-center items-center flex-col'>

      <ul className="my-20 steps">
        <li className="step step-primary">Cart</li>
        <li className="step step-primary">Checkout</li>
        <li className="step">Order Confirmed</li>
      </ul>
      <h1 className='my-10 text-5xl font-bold text-center'>Enter your details</h1>

      <div className='w-[100%] flex justify-around items-center'>
        <form>

          {/* 
          <label className="my-5 form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name: </span>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={formData.name} name="name" onChange={handleChange} />
          </label>


          <label className="my-5 form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">City:</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={formData.city} name="city" onChange={handleChange} />

          </label>

          <label className="my-5 form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Postal Code:</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={formData.postalCode} name="postalCode" onChange={handleChange}/>

          </label>


          <label className="my-5 form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Province</span>

            </div>
            <select className="select select-bordered" value={formData.province} name="province" onChange={handleChange}>
              <option disabled selected>Pick one</option>
              <option>Punjab</option>
              <option>Sindh</option>
              <option>KPK</option>
              <option>Balouchistan</option>
            </select>

          </label> */}


          <label className="my-5 form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Address:</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={shippingAddress} name="address" onChange={(e) => setShippingAddress(e.target.value)} />

          </label>

          <label className="my-5 form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Payment Method: </span>

            </div>
            <select className="select select-bordered" value={paymentMethod} name="paymentMethod" onChange={(e) => setPaymentMethod(e.target.value)}>
              <option disabled>Pick one</option>
              <option>Cash On Delivery</option>

            </select>

          </label>
        </form>


        <div id='summary'>
          <h1 className='my-10 text-3xl font-bold text-center'>Order Summary</h1>

          <div className="mx-5 overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>

                  <th>Product Name</th>
                  <th>Unit Price</th>
                  <th>Qty</th>
                  <th>Final Price</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartItems.map((cart, index) => {
                    return (
                      <tr key={index}>
                        <td>{cart.name}</td>
                        <td>Rs. {cart.price}</td>
                        <td>{cart.quantity}</td>
                        <td>Rs. {cart.quantity * cart.price}</td>
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
              <span className="text-info">Total: Rs. {totalPrice + shippingCharges}</span>

            </div>

            <Link className='my-10 btn btn-primary' onClick={confirmOrder}>Confirm Order</Link>

          </div>

        </div>
      </div>

    </div>

  )
}

export default Checkout