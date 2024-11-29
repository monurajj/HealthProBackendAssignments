const jwt = require('jsonwebtoken');

const JWT_SECRET_KEY = 'thisismysecretkeysoIwillkeepithwateverIwant';

const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET_KEY, { expiresIn: '1h' });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET_KEY);
  } catch (error) {
    return null;
  }
};

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
