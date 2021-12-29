import { userDao } from '../models';

import bcrypt from 'bcryptjs'; // 단방향 암호화
import jwt from 'jsonwebtoken';

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
  console.log('userService user:', name, phone_number, password);
  if (user) {
    throw (error = new Error('이미 가입된 이메일입니다'));
  }

  const hashedPW = await makeHash(password);

  console.log('hashedPW', hashedPW);

  return await userModel.createUser(email, hashedPW);
};

// 로그인
const signIn = async () => {};

export default { signUp, signIn };
