import Product from "../models/product.js";
const test = async (req, res) => {
    try {
        // Create 10 products
        for (let i = 1; i <= 10; i++) {
            const product = new Product({
                "name": `Product ${i}`,
                "price": 100 * i,
                "description": `This is product ${i}`,
                "rating": 4.5,
                "discount_percent": 10,
                "available_units": 50,
                "inStock": true,
                "reviews": [`Great product ${i}!`, `Really useful ${i}.`],
                "colors": ["red", "blue", "green","purple"][Math.floor(Math.random() * 4)],
                "category": ["electronics", "clothing", "accessories", "home"][Math.floor(Math.random() * 4)],
                "brand": `Brand ${i}`,
            });
            await product.save();
        }
        res.status(200).json({ message: "10 products created" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export default test;