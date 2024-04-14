import { useParams } from "react-router-dom";
import Shopping from "./Shopping";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
const Categories = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const [searchResults, setSearchResults] = useState([]);
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("");
    const [color, setColor] = useState("");
    const [priceFrom, setPriceFrom] = useState(100);
    const [priceTo, setPriceTo] = useState(5000);
    const [instock, setInStock] = useState(true);

    // const fetchSearchResults = () => {
    //     fetch(`http://localhost:3000/products/search?query=${query}`)
    //         .then(res => res.json())
    //         .then(data => setSearchResults(data))
    //         .catch(error => console.error("Error fetching search results:", error));
    // };
    // console.log(searchResults);

    // useEffect(() => {
    //     fetchSearchResults();
    // }, [query]);
    
    useEffect(() => {
        fetch(`http://localhost:3000/products/filter?category=${category}&priceFrom=${priceFrom}&priceTo=${priceTo}&color=${color}&inStock=${instock}`)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching filtered products:", error));
    }, [category, color, priceFrom, priceTo]);

    const handlePriceFrom = (e) => {
        const newPriceFrom = parseInt(e.target.value);
        if (newPriceFrom > priceTo) {
            setPriceFrom(priceTo);
            setPriceTo(newPriceFrom);
        } else {
            setPriceFrom(newPriceFrom);
        }
    };

    const handlePriceTo = (e) => {
        const newPriceTo = parseInt(e.target.value);
        if (newPriceTo < priceFrom) {
            setPriceTo(priceFrom);
            setPriceFrom(newPriceTo);
        } else {
            setPriceTo(newPriceTo);
        }
    };

    const handleCategory = (e) => {
        setCategory(e.target.innerText);
    };

    const handleColor = (e) => {
        setColor(e.target.innerText);
    };
    const handleInStock = (e) => {
        setInStock(e.target.checked);
    };



    const categories = [
        {
            category: "Categories",
            subCategories: ["Electronics", "Clothing", "Shoes", "Accessories"],
        },
        {
            category: "Colors",
            subCategories: ["Red", "Blue", "Green", "White", "Purple"],
        },
    ]

    return (
        <>
            <h1 className="text-4xl font-bold my-4 p-5">Filter By</h1>
            <div className="grid grid-cols-3 p-5">

                <div className="col-span-1">
                    <div className="container">
                        <ul className="menu bg-base-200 w-56 rounded-box">
                            <li >
                                <details close>
                                    <summary>{categories[0].category}</summary>
                                    <ul>
                                        {categories[0].subCategories.map((subCategory, subIndex) => (
                                            <li key={subIndex} onClick={handleCategory}><a>{subCategory}</a></li>
                                        ))}
                                    </ul>
                                </details>
                            </li>
                            <li >
                                <details close>
                                    <summary>{categories[1].category}</summary>
                                    <ul>
                                        {categories[1].subCategories.map((subCategory, subIndex) => (
                                            <li key={subIndex} onClick={handleColor}><a>{subCategory}</a></li>
                                        ))}
                                    </ul>
                                </details>
                            </li>
                        </ul>
                        <ul className="menu bg-base-200 w-56 rounded-box">
                            <label htmlFor="priceFrom">Price From</label>
                            <input type="range" name="priceFrom" value={priceFrom} min={50} step={50} max={1000} onChange={handlePriceFrom} />
                            <label htmlFor="priceTo">Price To</label>
                            <input type="range" name="PriceTo" min={50} value={priceTo} step={50} max={1000} onChange={handlePriceTo} />
                        </ul>
                        <ul className="menu bg-base-200 w-56 rounded-box">
                            <input className="" type="checkbox" name="instock" value={instock} onChange={handleInStock} />
                            <label htmlFor="instock" >In Stock</label>
                        </ul>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="flex">
                        <div className="w-full">
                            <Shopping products={products} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories;