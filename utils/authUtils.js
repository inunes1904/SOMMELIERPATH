const jwt = require('jsonwebtoken');

// Secret key for signing the JWT token
const JWT_SECRET = process.env.JWT_SECRET;

// Generate a JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId: userId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN }); // Token valid for 1 hour
  //return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES });
};

// Middleware to verify the JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  jwt.verify(token, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN },(err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = decoded;
    console.log('Decoded Token:', decoded);

    next();
  });
};

// This route will get a user's information, but only if they are authenticated
const getUserInfo = async (req, res) => {
  const user = await User.findById(req.user.userId); // userId comes from the token
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json({ email: user.email, role: user.role });
};

module.exports = { generateToken, verifyToken, getUserInfo };
