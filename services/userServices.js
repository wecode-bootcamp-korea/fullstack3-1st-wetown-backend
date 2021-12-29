import { userDao } from '../models';

import bcrypt from 'bcryptjs'; // 단방향 암호화
import jwt from 'jsonwebtoken';

const makeHash = async password => {
  return await bcrypt.hash(password, 10);
};

const comparePW = async (password, hashedPW) => {
  const isSame = await bcrypt.compare(password, hashedPW);
  return isSame;
};

//회원가입
const signUp = async (
  name,
  gender,
  phone_number,
  nickname,
  password,
  email
) => {
  console.log('userService user:', name, phone_number, password);

  const [user] = await userDao.getUserByEmail(email);

  if (user) {
    const error = new Error('이미 가입된 이메일입니다');

    throw error;
  }

  const hashedPW = await makeHash(password);

  console.log('hashedPW', hashedPW);

  await userDao.createUser(
    name,
    gender,
    phone_number,
    nickname,
    hashedPW,
    email
  );
};

// 로그인
const signIn = async (nickname, password) => {
  console.log('id in services: ', nickname);

  const [user] = await userDao.getUserByEmail(nickname);

  if (!user) {
    const error = new Error('INVALID_USER');
    error.statusCode = 400;

    throw error;
  }

  if (!comparePW) {
    const error = new Error('INVALID_USER');
    error.statusCode = 400;

    throw error;
  }

  const token = jwt.sign({ id: user.id }, 'wetown123', {
    expiresIn: '20m',
  });

  console.log('token :', token);

  console.log(jwt.verify(token, 'wetown123'));

  return token;
};

export default { signUp, signIn };
