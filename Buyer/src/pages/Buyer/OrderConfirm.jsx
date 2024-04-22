import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { useLocation } from 'react-router-dom';
function OrderConfirm() {
  const { width, height } = useWindowSize()
  const location = useLocation();
  const orderNumber = location.state.orderNumber;
  return (
    <div style={{
      minHeight: "100vh"
    }} className='flex justify-center items-center'>
      <Confetti
        width={width}
        height={height}
      />
      <div className="flex flex-col">
      <h1 className='my-10 text-3xl font-bold text-center'>Order Confirmed 🎉🙌</h1>
      <h2 className='my-10 text-2xl font-bold text-center'>Your Order Number Is: {orderNumber}</h2>
      <p className="text-center ">Keep this order number in record in order to track your order status</p>

      </div>
    </div>
  )
}

export default OrderConfirm