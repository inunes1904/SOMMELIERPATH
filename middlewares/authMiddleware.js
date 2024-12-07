const User = require('../models/userModel');

const hasRole = (...roles) => {
  return async (req, res, next) => {
    try {

      // Assume req.user.id is set after authentication
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Access denied: Insufficient permissions' });
      }
      next();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};

module.exports = { hasRole };
