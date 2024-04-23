import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import LoadingProductCompare from './LoadingProductCompare';
import SearchProductCard from './SearchProductCard';
import { useUserStore } from '../store/store';
import CompareProductCard from './CompareProductCard';

const CompareProducts = () => {

  const [product1, setProduct1] = useState("");
  const [product2, setProduct2] = useState("");

  const {Product1, Product2} = useUserStore();

  const [products, setProducts] = useState([]);

  const searchProduct = async(name) => {
    const req = await fetch(`http://localhost:3000/search?name=${name}`)
    const res = await req.json();

    setProducts(res);
   


  }

  const openModal1 = () => {
    document.getElementById('prod1').showModal();
  }
  const openModal2 = () => {
    document.getElementById('prod2').showModal();
  }
  return (
    // <Grid container spacing={2}>
    //   {compareItems.map((item, index) => (
    //     <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
    //       <Card>
    //         <CardContent>
    //           <Typography variant="h5" component="div">
    //             {item.name}
    //           </Typography>
    //           <Typography variant="body2" color="text.secondary">
    //             Price: {item.price}
    //           </Typography>
    //           <Typography variant="body2" color="text.secondary">
    //             Description: {item.description}
    //           </Typography>
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //   ))}
    // </Grid>
    <>
    <h1 className='text-3xl font-bold text-center'>Compare Product</h1>
    <div style={{
      minHeight: "100vh"
    }} className='flex justify-around items-center'>
      
      <div>

<button className="btn btn-primary" onClick={openModal1}>Choose Product</button>
<dialog id="prod1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Pick Product 1!</h3>
    
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Search Product:</span>
  </div>
  <input value={product1} onChange={e=>setProduct1(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <button  onClick={()=>{
      searchProduct(product1)
    }} className='my-5 btn btn-primary'>Search</button>

    {
      products.map((prod, index)=> {
        return (
          <SearchProductCard productNumber={1} key={prod._id} name={prod.name} price={prod.price} description={prod.description} rating={prod.rating} brand={prod.brand} />
        )
      })
    }
  
</label>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

{
  
Object.keys(Product1).length==0?(
<LoadingProductCompare/>
  ):(
   <CompareProductCard product={Product1}/>
  )
}
      </div>

      <div>

      <button className="btn btn-primary" onClick={openModal2}>Choose Product</button>
<dialog id="prod2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Pick Product 2!</h3>
    <input value={product2} onChange={e=>setProduct2(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <button   onClick={()=>{
      searchProduct(product2)
    }}  className='my-5 btn btn-primary'>Search</button>
  
  

    {
      products.map((prod, index)=> {
        return (
          <SearchProductCard productNumber={2} key={prod._id} name={prod.name} price={prod.price} description={prod.description} rating={prod.rating} brand={prod.brand} available_units={prod.available_units} />
        )
      })
    }
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
{

Object.keys(Product2).length==0?(
  <LoadingProductCompare/>
  ):(
   <CompareProductCard product={Product2}/>
    
    )
  }
      </div>
    </div>
      </>
  );
};

export default CompareProducts;