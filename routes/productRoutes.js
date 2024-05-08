// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

// Sample data
// const products = [
//     { id: 1, name: 'Product 1', price: 10 },
//     { id: 2, name: 'Product 2', price: 20 },
//     { id: 3, name: 'Product 3', price: 30 },
//   ];

//   // Route to fetch products
// router.get('/api/products', (req, res) => {
//     res.json(products);
//   });

router.get('/', ProductController.getAllProducts);

module.exports = router;
