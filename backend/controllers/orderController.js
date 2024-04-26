import Order from '../models/order.js';
import mongoose from 'mongoose';
// Order Controller
const createOrder = async (req, res) => {
    // If user is not logged in, return error
    // Create order
    try {
        // Check if user is logged in
        const buyer = req.session.userId;
        const { orderNumber, totalPrice, taxAmount, discount, products, shippingAddress, paymentMethod } = req.body;
        // if (buyer === undefined && buyer || orderNumber === undefined || totalPrice === undefined || taxAmount === undefined || discount === undefined || products === undefined || shippingAddress === undefined || paymentMethod === undefined || status === undefined) {
        //     return res.status(400).json({ message: 'Invalid data' });
        // }
        const order = new Order({
            buyer,
            orderNumber,
            totalPrice,
            taxAmount,
            discount,
            products,
            shippingAddress,
            paymentMethod,
        });
        await order.save();
        res.status(201).json("Order created successfully");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getOrders = async (req, res) => {
    try {
        const sellerId = "6616be959f1d5253c11dd5f9"; // Assuming you get the seller id from the request params

        const orders = await Order.aggregate([
            // Unwind the products array to access the product documents
            { $unwind: "$products" },
            // Lookup the product details using the product id
            { $lookup: { from: "products", localField: "products.product", foreignField: "_id", as: "product" } },
            // Unwind the product array to flatten the result
            { $unwind: "$product" },
            // Match orders that have products related to the specified seller id
            { $match: { "product.seller": new mongoose.Types.ObjectId(sellerId) } }
        ]);

        res.status(200).json({ orders });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}




const trackOrder = async (req, res) => {
    const { orderNumber } = req.body;
    try {
        const order = await Order.findOne({ orderNumber });
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order.status);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateOrderStatus = async (req, res) => {
    const id = req.params.id;
    const { status } = req.body;
    const order = await Order.findOne({ _id: id });
    // console.log({
    //     id,
    //     status
    // })
    switch (status) {
        case 'canceled':
            if (order.status == 'confirmed') {
                return res.status(400).json({ message: 'Cannot cancel completed order' });
            }
            else {
                order.status = 'canceled';
                await order.save();
                return res.status(200).json({ message: 'Order cancelled' });
            }
        case 'confirmed':
            if (order.status == 'canceled') {
                return res.status(400).json({ message: 'Cannot complete cancelled order' });
            }
            else {
                order.status = 'confirmed';
                await order.save();
                return res.status(200).json({ message: 'Order completed' });
            }
        default:
            return res.status(400).json({ message: 'Invalid status' });
    }
}

export { createOrder, getOrders, trackOrder, updateOrderStatus };