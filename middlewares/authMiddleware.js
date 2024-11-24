const User = require('../models/userModel');

const hasRole = (...roles) => {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id); // Assume req.user.id is set after authentication
      if (!roles.includes(user.role)) {
        return res.status(403).json({ message: 'Access denied: Insufficient permissions' });
      }
      next();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};

module.exports = { hasRole };
