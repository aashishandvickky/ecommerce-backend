// routes/checkoutRoutes.js
const express = require('express');
const router = express.Router();
const CheckoutController = require('../controllers/CheckoutController');

router.post('/', CheckoutController.processCheckout);

module.exports = router;
