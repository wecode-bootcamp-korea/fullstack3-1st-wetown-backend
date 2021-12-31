import verifyToken from './token';

//인증
const authentication = (req, res, next) => {
  const token = req.cookies.user; // token가져오기

  const validToken = verifyToken(token);

  if (validToken) {
    req.userId = validToken.id;
    next();
  } else {
    res.status(400).send('토큰이 유효하지 않습니다.');
    return;
  }
};

export default authentication;
