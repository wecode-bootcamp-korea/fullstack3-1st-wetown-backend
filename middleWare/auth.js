import verifyToken from './token';

//인증
const authentication = (req, res, next) => {
  const token = req.cookies.user; // token가져오기

  const vaildToken = verifyToken(token);

  if (vaildToken) {
    req.userId = vaildToken.id;
    next();
  } else {
    res.status(400).send('토큰이 유효하지 않습니다.');
    return;
  }
};

export default authentication;
