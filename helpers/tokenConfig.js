const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({ user }, 'tu_secreto_secreto', { expiresIn: '1h' });
};

module.exports = { generateToken };
