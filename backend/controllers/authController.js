// controllers/authController.js
import bcrypt from 'bcrypt'
import User from '../models/user.js'
import Seller from '../models/seller.js'

const signup = async (req, res) => {
    const { username, email, password } = req.body

    if (!username) {
        return res.status(400).json({ message: 'Username is required' })
    }

    if (!email) {
        return res.status(400).json({ message: 'Email is required' })
    }

    const emailRegex = /\S+@\S+\.\S+/
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' })
    }

    if (!password) {
        return res.status(400).json({ message: 'Password is required' })
    }

    // Check if password is less than 6 characters
    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters' })
    }

    const user = await User.findOne({ email })

    if (user) {
        return res.status(400).json({ message: 'User already exists' })
    }

    const hashedPassword = bcrypt.hashSync(password, 10)

    try {
        const newUser = new User({ fullname: username, email: email, password: hashedPassword })
        await newUser.save()
        return res.status(200).json({ message: 'User created successfully' })
    } catch (err) {
        return res.status(500).json({ message: 'Something went wrong!' })
    }
}
const login = async (req, res) => {
    const { email, password } = req.body

    if (!email) {
        return res.status(400).json({ message: 'Email is required' })
    }

    // Check if email is valid
    const emailRegex = /\S+@\S+\.\S+/
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' })
    }

    if (!password) {
        return res.status(400).json({ message: 'Password is required' })
    }

    // Check if password is less than 6 characters
    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters' })
    }

    const user = await User.findOne({ email })

    if (!user) {
        return res.status(400).json({ message: 'User does not exist' })
    }

    // Check if the passwords match
    const match = bcrypt.compareSync(password, user.password)

    if (!match) {
        return res.status(400).json({ message: 'Invalid credentials' })
    }


    req.session.userId = user._id;
    req.session.email = email;
    req.session.lastLoginTime = new Date().toLocaleString();
    res.status(200).json({
        message: 'Logged in successfully',
        userId: user._id,
        username: user.fullname,
    });
}

const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: 'Something went wrong!' });
        }
        return res.status(200).json({ 
            message: 'Successfully logged out',
        });
    })
}

// Seller controller
const sellerSignup = async (req, res) => {
    const { name, email, password, phone, businessName, businessDescription} = req.body

    if (!name) {
        return res.status(400).json({ message: 'Name is required' })
    }

    if (!email) {
        return res.status(400).json({ message: 'Email is required' })
    }
    if(!password){
        return res.status(400).json({ message: 'Password is required' })
    }

    const emailRegex = /\S+@\S+\.\S+/
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' })
    }

    if (!phone) {
        return res.status(400).json({ message: 'Phone is required' })
    }

    if (!businessName) {
        return res.status(400).json({ message: 'Business name is required' })
    }

    if (!businessDescription) {
        return res.status(400).json({ message: 'Business description is required' })
    }
    const seller = await Seller.findOne({ email })
    
    if (seller) {
        return res.status(400).json({ message: 'Seller already exists' })
    }
    const hashedPassword = bcrypt.hashSync(password, 10)
    try {
        const newSeller = new Seller({ name, email, password : hashedPassword, phone, businessName, businessDescription})
        await newSeller.save()
        return res.status(200).json({ message: 'Seller created successfully' })
    } catch (err) {
        return res.status(500).json({ message: 'Something went wrong!' })
    }
}

const sellerSignin = async (req, res) => {
    const { email, password } = req.body

    if (!email) {
        return res.status(400).json({ message: 'Email is required' })
    }

    // Check if email is valid
    const emailRegex = /\S+@\S+\.\S+/
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' })
    }

    if (!password) {
        return res.status(400).json({ message: 'Password is required' })
    }

    // Check if password is less than 6 characters
    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters' })
    }

    const seller = await Seller.findOne({ email })

    if (!seller) {
        return res.status(400).json({ message: 'Seller does not exist' })
    }

    // Check if the passwords match
    const match = bcrypt.compareSync(password, seller.password)

    if (!match) {
        return res.status(400).json({ message: 'Invalid credentials' })
    }

    return res.status(200).json({ message: 'Logged in successfully' })
}   
export { login, signup, logout, sellerSignup, sellerSignin};