import mongoose from 'mongoose';

const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    businessName: {
        type: String,
        required: true
    },
    businessDescription: {
        type: String,
        required: true
    },
    averageRating: {
        type: Number,
        required: true,
        default: Math.round(Math.random() * 5 + 1)
    },
    isAuthorized : {
        type: Boolean,
        default: false,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Seller = mongoose.model('Seller', sellerSchema);
export default Seller;
