import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
function OrderConfirm() {
    const { width, height } = useWindowSize()
  return (
    <div style={{
        minHeight: "100vh"
    }} className='flex justify-center items-center'>
         <Confetti
      width={width}
      height={height}
    />
<h1 className='my-10 text-3xl font-bold text-center'>Order Confirmed 🎉🙌</h1>


    </div>
  )
}

export default OrderConfirm