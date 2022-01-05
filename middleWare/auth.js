import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

//인증
const authentication = (req, res, next) => {
  const token = req.body.token; // token가져오기

  const validToken = verifyToken(token);

  if (validToken) {
    req.body.userId = validToken.id;
    next();
  } else {
    res.status(400).send('토큰이 유효하지 않습니다.');
    return;
  }
};

// 토큰 확인 절차
const verifyToken = token => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return null;
  }
};

export default { authentication };
