import jwt from 'jsonwebtoken';
require('dotenv').config();

const verifyToken = token => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return null;
  }
};

export default verifyToken;
