import React from 'react';
import { useUserStore } from '../store/store';



function SearchProductCard({productNumber, name, price, description, rating, brand, inStock, available_units}) {
    const {SetProduct1, SetProduct2} = useUserStore();
    const pickProduct = () =>{

        const data = {
            name: name,
            description: description,
            price: price,
            rating: rating,
            brand: brand,
            inStock: inStock,
            available_units: available_units

        }

        if (productNumber == 1) {

            SetProduct1(data);
        }
        else {
            SetProduct2(data)
        }

    }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
   
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p>{description}</p>
      <h2 className="card-title">Price: {price}</h2>
      <div className="card-actions justify-end">
        <button onClick={pickProduct} className="btn btn-primary">Pick</button>
      </div>
    </div>
  </div>
  )
}

export default SearchProductCard