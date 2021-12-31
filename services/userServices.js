import { userDao } from '../models';

import bcrypt, { compareSync } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

//비밀번호 암호화
const makeHash = async password => {
  return await bcrypt.hash(password, 10);
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
  const [userEmail] = await userDao.getUserByEmail(email);

  if (userEmail) {
    const error = new Error('이미 가입된 이메일입니다');

    throw error;
  }

  const hashedPW = await makeHash(password);

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
const signIn = async (email, password) => {
  const [user] = await userDao.getUserByEmail(email);
  const isSame = compareSync(password, user.password);

  if (!user) {
    const error = new Error('INVALID_USER');
    error.statusCode = 400;

    throw error;
  }

  if (!isSame) {
    const error = new Error('INVALID_USER');
    error.statusCode = 400;

    throw error;
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: '20m',
  });

  return token;
};

export default { signUp, signIn };
