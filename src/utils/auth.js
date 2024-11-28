const jwt = require('jsonwebtoken');

// JWT Secret Key (should be kept private and secure, and ideally stored in environment variables)
const JWT_SECRET_KEY = 'thisismysecretkeysoIwillkeepithwateverIwant';

// Function to generate a JWT token for a user
const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET_KEY, { expiresIn: '1h' });
};

// Function to verify the JWT token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET_KEY);
  } catch (error) {
    return null;
  }
};

// Middleware to protect routes that require authentication
const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'Access denied, no token provided' });

  const decoded = verifyToken(token);
  if (!decoded) return res.status(401).json({ message: 'Invalid or expired token' });

  req.userId = decoded.userId;
  next();
};

module.exports = {
  JWT_SECRET_KEY,
  generateToken,
  verifyToken,
  authenticate
};
