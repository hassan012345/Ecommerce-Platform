// controllers/productController.js
import bcrypt from 'bcrypt'
import Product from '../models/product.js'
import User from '../models/user.js'

const getProducts = async (req, res) => {
    try {
        // Get all products from database
        const products = await Product.find();
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const getProduct = async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id })
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createProduct = async (req, res) => {
    // Check if user is admin
    const user = await User.findOne({ _id: req.session.userId });
    if (!user.isAdmin) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Create new product


    try {
        // Check request contains all the required fields
        const { name, price, description, inStock, color } = req.body;
        if (!name || !price || !description || !inStock || !color) {
            return res.status(400).json({ message: 'All fields are required' })
        }
        const product = new Product({ name, price, description, inStock, color });
        // Save product to database
        await product.save();
        // Return product
        res.status(200).json("Product added to catalog");
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateProduct = async (req, res) => {
    // Check if user is admin

    // If user is not admin, return error

    // Check request contains all the required fields
    // Decde if all the fields are required

    // Find product by id
    // If product not found, return error

    // Update product

    // Save product to database

    // Return product

    try {
        const user = await User.findOne({ _id: req.session.userId });
        if (!user.isAdmin) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const product = await Product.findOne({ _id: req.params.id });
        const { name, price, description, inStock, color } = req.body;
        if (name) {
            product.name = name;
        }
        if (price) {
            product.price = price;
        }
        if (description) {
            product.description = description;
        }
        if (typeof inStock !== 'undefined' && inStock !== null) {
            product.inStock = inStock;
        }
        if (color) {
            product.color = color;
        }
        await product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getCategories = async (req, res) => {
    try {
        const products = await Product.find({ category: req.params.category });
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const searchProducts = async (req, res) => {
    const { name } = req.query
    try {
        const products = await Product.find({ name: name }); // Use 'name' instead of 'query'
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getFilteredProducts = async (req, res) => {
    const { category, priceFrom, priceTo, inStock } = req.query;
    try {
        let query = {};

        if (category) {
            query.category = category;
        }
        if (priceFrom && priceTo) {
            query.price = { $gte: priceFrom, $lte: priceTo };
        } else if (priceFrom) {
            query.price = { $gte: priceFrom };
        } else if (priceTo) {
            query.price = { $lte: priceTo };
        }
        if (inStock !== null && inStock !== undefined) {
            query.inStock = inStock;
        }


        const products = await Product.find(query);
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: 'An error occurred' });
    }
};

const deleteProduct = async (req, res) => {

    // If product not found, return error

    // Delete product


    try {
        const user = await User.findOne({ _id: req.session.userId });
        // Check if user is admin
        if (!user.isAdmin) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Find product by id
        const product = await Product.findOneAndDelete({ _id: req.params.id });
        res.status(200).json("Product deleted");
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export { getProducts, getProduct, createProduct, updateProduct, deleteProduct, getFilteredProducts, getCategories, searchProducts };