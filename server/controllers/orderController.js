import Order from '../models/order.js';
// Order Controller
const createOrder = async (req, res) => {
    // If user is not logged in, return error
    // Create order
    try {
        // Check if user is logged in
        const { orderNumber, totalPrice, taxAmount, discount, products, address, status } = req.body;
        console.log(products);
        const order = new Order({
            orderNumber,
            totalPrice,
            taxAmount,
            discount,
            products,
            address,
            status
        });
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        console.log(order);
        res.status(200).json(orders);
    } catch (error) {
        res.status(404).json({ message: error.message });
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
        case 'cancel':
            if (order.status == 'complete') {
                return res.status(400).json({ message: 'Cannot cancel completed order' });
            }
            else {
                order.status = 'cancel';
                await order.save();
                return res.status(200).json({ message: 'Order cancelled' });
            }
        case 'complete':
            if (order.status == 'cancel') {
                return res.status(400).json({ message: 'Cannot complete cancelled order' });
            }
            else {
                order.status = 'complete';
                await order.save();
                return res.status(200).json({ message: 'Order completed' });
            }
        default:
            return res.status(400).json({ message: 'Invalid status' });
    }
}

export { createOrder, getOrders, trackOrder, updateOrderStatus };