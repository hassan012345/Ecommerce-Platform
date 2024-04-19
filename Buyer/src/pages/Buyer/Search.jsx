import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Shopping from "./Shopping";

const Categories = () => {
    const [page, setPage] = useState(1);
    const [searchResults, setSearchResults] = useState([]);
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("");
    const [priceFrom, setPriceFrom] = useState(100);
    const [priceTo, setPriceTo] = useState(5000);
    const [instock, setInStock] = useState(true);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    useEffect(() => {
        if (query) {
            // Fetch search results based on query
            fetch(`http://localhost:3000/search?name=${query}`)
                .then(res => res.json())
                .then(data => setSearchResults(data))
                .catch(error => console.error("Error fetching search results:", error));
        } else {
            // Fetch all products
            fetchAllProducts();
        }
    }, [query]);
    // useEffect(() => {
    //     // If search results are empty, fetch filtered products based on category, price, and availability
    //         fetchFilteredProducts();
    // }, [category, priceFrom, priceTo, instock]);

    const fetchAllProducts = () => {
        // Fetch all products
        fetch(`http://localhost:3000/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching products:", error));
    };

    useEffect(() => {
        // Only fetch filtered products if any filter is applied
        if (category || priceFrom || priceTo || instock) {
            fetchFilteredProducts();
        }
    }, [category, priceFrom, priceTo, instock]);

    const fetchFilteredProducts = () => {
        // Fetch filtered products based on category, price, and availability
        fetch(`http://localhost:3000/products/filter?category=${category}&priceFrom=${priceFrom}&priceTo=${priceTo}&inStock=${instock}`)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching filtered products:", error));
    };

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

    const handleCategory = (subCategories) => {
        setCategory(subCategories);
    };

    const handleInStock = (e) => {
        setInStock(e.target.checked);
    };

    const categories = [
        {
            category: "Categories",
            subCategories: ["electronics", "clothing", "home", "shoes", "accessories"],
        },
    ];
    console.log(category, priceFrom, priceTo, instock, searchResults, products)
    return (
        <>
            <h1 className="text-4xl font-bold my-4 p-5">Filter By</h1>
            <div className="grid grid-cols-4 p-5">
                <div className="col-span-1">
                    <div className="container">
                        {/* Category Filter */}
                        <div className="menu bg-base-200 w-56 rounded-box mb-4">
                            <h3 className="text-lg font-semibold mb-2">Categories</h3>
                            {categories.map((category, index) => (
                                <details key={index} close>
                                    <summary>{category.category}</summary>
                                    <ul>
                                        {category.subCategories.map((subCategory, subIndex) => (
                                            <li key={subIndex} onClick={() => handleCategory(subCategory)}><a>{subCategory}</a></li>
                                        ))}
                                    </ul>
                                </details>
                            ))}
                        </div>
                        {/* Price Range Filter */}
                        <div className="menu bg-base-200 w-56 rounded-box mb-4">
                            <h3 className="text-lg font-semibold mb-2">Price Range</h3>
                            <div className="flex justify-between items-center mb-2">
                                <span>From: ${priceFrom}</span>
                                <span>To: ${priceTo}</span>
                            </div>
                            <label htmlFor="priceFrom" className="block mb-1">From</label>
                            <input type="range" name="priceFrom" value={priceFrom} min={50} step={50} max={1000} onChange={handlePriceFrom} />
                            <label htmlFor="priceTo" className="block mb-1">To</label>
                            <input type="range" name="PriceTo" min={50} value={priceTo} step={50} max={1000} onChange={handlePriceTo} />
                        </div>
                        {/* In Stock Filter */}
                        <div className="menu bg-base-200 w-56 rounded-box mb-4">
                            <input className="mr-2" type="checkbox" name="instock" value={instock} onChange={handleInStock} />
                            <label htmlFor="instock" className="text-lg">In Stock</label>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="flex">
                        <div className="w-full">
                            <Shopping products={searchResults.length > 0 ? searchResults : products} />
                            <div className='my-10 flex justify-center items-center gap-4'>
                            <button className="btn btn-primary" onClick={() => setPage(prevPage => prevPage - 1)} disabled={page === 1}>Previous</button>
                            <span>Page {page}</span>
                            <button className="btn btn-primary" onClick={() => setPage(prevPage => prevPage + 1)}>Next</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Categories;
