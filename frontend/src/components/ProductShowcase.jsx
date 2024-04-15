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
    <div className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-white">
  <img src={image} alt={`${title} Picture`} className="w-full h-auto" />
  <div className="p-4 flex flex-col justify-between flex-1">
    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="flex justify-between items-center mt-2">
        <p className={`text-base ${discount !== 0 && 'line-through'}`}>Rs. {price}</p>
        {discount !== 0 && <p className="text-base font-semibold">Rs. {price - (price * discount) / 100}</p>}
      </div>
    </div>
    <div className="flex justify-between items-center mt-4">
      <button className="btn btn-primary px-4 py-2" onClick={addToCart}>Add to Cart</button>
      <a href={`/product/${productId}`} className="btn btn-primary px-4 py-2">View Product</a>
    </div>
  </div>
</div>
  )
}

export default ProductShowcase