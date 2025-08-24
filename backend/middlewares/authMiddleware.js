const jwt = require('jsonwebtoken');
const {User} = require('../models');

const protect = async (req, res, next) => {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) return res.status(401).json({ message: 'Not authorized' });
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
  };

  module.exports = { protect };