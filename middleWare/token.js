import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const verifyToken = token => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return null;
  }
};

export default verifyToken;
