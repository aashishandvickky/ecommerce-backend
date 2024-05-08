// controllers/CheckoutController.js
const User = require('../models/User');

exports.processCheckout = async (req, res) => {
  const { name, email } = req.body;
  try {
    const userId = await User.createUser(name, email);
    // Additional checkout logic (saving order details, etc.)
    res.json({ success: true, userId });
  } catch (error) {
    console.error('Error processing checkout:', error);
    res.status(500).json({ error: 'Error processing checkout' });
  }
};
