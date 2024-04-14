import { useEffect, useState } from "react";
import ProductShowcase from "./ProductShowcase";
import Carousel from "react-elastic-carousel";
import "../css/productCarousel.css"
// import styles from "../styles/Elastic.module.css";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 }
];
export default function ElasticCarousel() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch('http://localhost:3000/products')
    console.log(res)
    const data = await res.json()
    setProducts(data.slice(0, 5));
    console.log(data)
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div >
      <div className="my-20">
        <h1 className="text-4xl font-bold text-center">Trending Products</h1>
      </div>
      <div style={{
        marginLeft: "10px"
      }}>
        <Carousel breakPoints={breakPoints}>
          {products.map((product, i) => (<div key={product._id}>
            <ProductShowcase discount={product.discount_percent} sku={"35"} productId={product._id} image={"https://plus.unsplash.com/premium_photo-1712016874970-ee8062157b31?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} title={product.name} price={product.price} />
          </div>))}
        </Carousel>
      </div>
    </div>
  );
}
