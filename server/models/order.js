import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    product: {
        type: mongoose.ObjectId,
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
    products: [productSchema],
    address: {
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        province: {
            type: String,
            required: true
        },
        country: {
            type: String,
            default: 'Pakistan',
            required: true
        },
        postalCode: {
            type: String,
            required: false
        },
        contactName: {
            type: String,
            required: true
        },
        contactNumber: {
            type: String,
            required: true
        }
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