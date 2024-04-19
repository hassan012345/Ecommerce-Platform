import React from 'react'
import { useState, useEffect } from 'react';
import ProductShowcase from '../../components/ProductShowcase'

function Shopping({ products }) {
  // const [products, setProducts] = useState([]);

  // const getProducts = async () => {
  //   const res = await fetch('http://localhost:3000/products')
  //   console.log(res)
  //   const data = await res.json()
  //   setProducts(data.slice(0, 5));
  //   console.log(data)
  // }

  // useEffect(() => {
  //   getProducts();
  // }, [])

  return (
    <div className="w-full flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.length === 0 ? (
          <div className="col-span-2 text-center text-gray-500">
            Nothing Matches Your Search.......
          </div>
        ) : (
          products.map((product) => (
            <ProductShowcase
              key={product._id}
              productId={product._id}
              discount={product.discount_percent}
              sku={product.sku}
              image="https://plus.unsplash.com/premium_photo-1712016874970-ee8062157b31?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title={product.name}
              price={product.price}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Shopping
