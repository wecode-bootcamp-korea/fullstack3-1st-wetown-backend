import jwt from 'jsonwebtoken';

const verifyToken = token => {
  try {
    return jwt.verify(token, 'wetown123');
  } catch (err) {
    return null;
  }
};

export default verifyToken;
