const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      // Validate request body
      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }

      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Verify password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Generate JWT token
      const token = jwt.sign(
        { id: user._id, role: user.role }, // Payload
        process.env.JWT_SECRET, // Secret
        { expiresIn: process.env.JWT_EXPIRES_IN } // Options
      );

      res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new AuthController();
