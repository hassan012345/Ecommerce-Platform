import React from 'react'

function CompareProductCard({product}) {
  return (
    <div className="my-10 card card-compact w-96 bg-base-100 shadow-xl">
 
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <p>Price: {product.price}</p>
    <p>Rating: {product.rating}</p>
    <p>In Stock: {product.inStock}</p>
    <p>Available units: {product.available_units}</p>
    
  </div>
</div>
 )
}

export default CompareProductCard