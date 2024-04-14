import React from 'react'
import { useUserStore } from '../store/store';

function ProductShowcase({discount, sku, productId, title, image, price}) {
  const { setCartItems, cartItems } = useUserStore()
 
  const addToCart = () => {
    const oldCart = [...cartItems]
    // check if item is already in cart
    const itemIndex = oldCart.findIndex(item => item.id === productId)
    if (itemIndex !== -1) {
      // item already exists in cart
      oldCart[itemIndex].quantity += 1
      setCartItems(oldCart)
      console.log(oldCart)
      return
    }else {
      const newCart = [...oldCart, {sku:sku, id: productId, name:  title, price: (price-(price*discount)/200), quantity: 1}]
      setCartItems(newCart)
      console.log(newCart)
    }

    toast.success('Product Added to Cart', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }
  return (
    <div style={{
      width: '70%',
      minHeight: '400px',
    }} className="my-10 card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt={`${title} Picture`} /></figure>
  <div className="card-body">
    <h1 className={`text-2xl card-title`}>{title}</h1>
    <div className='flex justify-center items-center my-5 text-2xl'>
    <p className={`mx-5 font-bold text-1xl ${discount==0?'':'line-through'}`}>Rs. { price }</p>
    {
      discount !== 0 ? <p className='font-bold text-1xl'>Rs. { price-(price*discount)/100 }</p> : null
    }
    </div>
    <div className="card-actions justify-end">
      {/* <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button> */}
      <a className="btn btn-primary" onClick={addToCart}>Add to Cart</a>
      <a href={`/product/${productId}`} className="btn btn-primary">View Product</a>
    </div>
  </div>
</div>
  )
}

export default ProductShowcase