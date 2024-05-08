// controllers/ProductController.js
const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  try {
    // const products = await Product.getAllProducts();
    res.json(Product);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Error fetching products' });
  }
};
