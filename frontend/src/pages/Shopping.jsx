import React from 'react'
import ProductShowcase from '../components/ProductShowcase'

 function Shopping() {
  return (
    <div>
        <h1 className='my-10 text-5xl font-bold text-center'>Shop</h1>


        <div className='w-[100%] flex justify-center items-center'>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <ProductShowcase discount={2} sku={"35"} productId={2} image={"https://plus.unsplash.com/premium_photo-1712016874970-ee8062157b31?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} title={"Test"} price={200}/>
        <ProductShowcase discount={2} sku={"35"} productId={2} image={"https://plus.unsplash.com/premium_photo-1712016874970-ee8062157b31?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} title={"Test"} price={200}/>
        <ProductShowcase discount={2} sku={"35"} productId={2} image={"https://plus.unsplash.com/premium_photo-1712016874970-ee8062157b31?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} title={"Test"} price={200}/>
        <ProductShowcase discount={2} sku={"35"} productId={2} image={"https://plus.unsplash.com/premium_photo-1712016874970-ee8062157b31?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} title={"Test"} price={200}/>
        <ProductShowcase discount={2} sku={"35"} productId={2} image={"https://plus.unsplash.com/premium_photo-1712016874970-ee8062157b31?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} title={"Test"} price={200}/>





        </div>

        </div>

<div className='my-10 flex justify-center items-center'> 

        <button className='btn btn-primary'>Load More...</button>
</div>
    </div>
  )
}

export default Shopping
