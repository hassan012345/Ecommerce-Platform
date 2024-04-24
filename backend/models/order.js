import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
},
    {
        _id: false
    }
);
const orderSchema = new mongoose.Schema({
    orderNumber: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    taxAmount: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [productSchema],  
    shippingAddress: {
        type: String,
        required: true
    },
    paymentMethod : {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'processing',
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model('Order', orderSchema);
export default Order;