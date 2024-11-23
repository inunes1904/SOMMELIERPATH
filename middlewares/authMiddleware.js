const User = require('../models/userModel');

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id); // Assume req.user.id is set after authentication
    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied: Admins only' });
    }
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { isAdmin };
