import express from "express";
import {signup, login, logout, sellerSignup, sellerSignin} from '../controllers/authController.js';
import {getProducts,getProduct, createProduct, createRating, updateProduct, deleteProduct, getFilteredProducts, searchProducts } from '../controllers/productController.js';
import {createOrder, getOrders, updateOrderStatus, trackOrder} from '../controllers/orderController.js';
import authenticate from '../middleware/sellermiddleware.js';
import buyeruthenticate from "../middleware/buyermiddleware.js";
import { Router } from "express";
import test from "./test.js";
const router = Router();

router.get("/", (req, res) => {
  res.send("Welcome to the server");
});
router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.get('/products', getProducts);
router.get('/products/filter', getFilteredProducts);
router.get('/products/:id', getProduct);
router.post('/products', createProduct);
router.patch('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);
router.post('/ratings/:id', createRating);
// router.get('/categories/:category', getCategories);  
router.get('/search', searchProducts);
router.post('/orders',createOrder);
router.get('/orders',getOrders);
router.post('/orders/track',trackOrder);
router.post('/orders/status/:id', updateOrderStatus);
router.post('/seller/signup', sellerSignup);
router.post('/seller/login', sellerSignin);
router.post('/test', test);

export default router;