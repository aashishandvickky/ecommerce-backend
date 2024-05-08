// app.js
const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/checkout', checkoutRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
