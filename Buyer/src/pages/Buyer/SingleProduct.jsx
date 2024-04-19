import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useUserStore } from '../../store/store';

function SingleProduct() {
  const [product, setProduct] = useState(null);
  let { id } = useParams();

  const getProduct = async () => {
    try {
      const res = await fetch(`http://localhost:3000/products/${id}`);
      if (res.ok) {
        const data = await res.json();
        setProduct(data);
      } else {
        throw new Error('Failed to fetch product');
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProduct();
  }, [])

  const { cartItems, setCartItems } = useUserStore();
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const addToCart = () => {
    const newItem = {
      id: id,
      title: "Check Product",
      price: 200,
      qty: 1
    }
    const index = cartItems.findIndex(item => item.id === id);
    if (index !== -1) {
      const tempArr = cartItems;
      tempArr[index].qty += 1;
      setCartItems(tempArr)
    } else {
      const newArr = [newItem, ...cartItems];
      setCartItems(newArr);
    }
  }

  const comparePrpduct = () => {

  }

  if(product === null) return <h1>Loading...</h1>

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src="https://plus.unsplash.com/premium_photo-1712016874970-ee8062157b31?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{product.name}</h1>
            <p className="py-6">{product.description}</p>
            <h1 className='text-4xl font-bold my-5'>{product.price}</h1>
            <button onClick={addToCart} className="btn btn-primary">Add to Cart</button>
            <button onClick={comparePrpduct} className="btn btn-primary">Compare Product</button>
          </div>
        </div>
      </div>




      <div className='my-10 flex justify-center flex-col items-center' id='tabs'>
        <h1 className="text-3xl my-10 font-bold">Product Details!</h1>

        <div role="tablist" className="tabs tabs-bordered">
          <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Details" />
          <div role="tabpanel" className="tab-content p-10">Product Details</div>

          <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Shipping" checked />
          <div role="tabpanel" className="tab-content p-10">Shipping Details</div>

          <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Return Policy" />
          <div role="tabpanel" className="tab-content p-10">Return Policy</div>
        </div>
      </div>


      <div className="divider"></div>

      <div className='my-10 flex justify-center items-center flex-col' id='rating'>

        <h1 className='my-10 text-5xl font-bold text-center'>Add your Rating</h1>



        <div className="rating rating-lg">
          {[1, 2, 3, 4, 5].map((value) => (
            <input
              type="radio"
              name="rating-8"
              className="mask mask-star-2 bg-orange-400"
              checked={rating === value}
              value={value}
              onChange={handleRatingChange}
            />
          ))}
        </div>
        <textarea placeholder="What you like about the product?" className="my-5 textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>


        <button className='my-5 btn btn-primary'>Submit Rating</button>

      </div>


    </div>
  )
}

export default SingleProduct