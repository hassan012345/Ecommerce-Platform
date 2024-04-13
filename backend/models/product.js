import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating : {
        type: Number,
        default: 0
    },
    discount_percent : {
        type: Number,
        default: 0
    },
    available_units: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    },
    reviews: [{
        type: String,
    }],
    colors: [{
        type: String,
    }],
    category: {
        type: String,
        requited: true
    },
    brand: {
        type: String,
        required: true
    },
    color: [{
        type: String
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model('Product', productSchema);
export default Product;
