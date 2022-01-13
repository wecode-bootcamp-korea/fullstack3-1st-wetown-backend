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
  let isSame;
  let error;

  // user가 존재하면 입력받은 password 가 일치 하는지 확인 후
  // 존재 하지 않으면 에러를 던져준다
  if (user) {
    isSame = compareSync(password, user.password);
  } else if (!user) {
    error = new Error('INVALID_USER');
    error.statusCode = 400;

    throw error;
  }

  // user가 존재해서 password 가 일치 하는지 확인 후
  // 일치 하지 않아서 에러를 던져준다
  if (!isSame) {
    error = new Error('INVALID_USER');
    error.statusCode = 400;

    throw error;
  }

  // password가 db에 있는 비밀번호와 같아서 여기까지 온다면, 토큰을 발행하고 토큰을 반환해준다

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: '20m',
  });

  return token;
};

export default { signUp, signIn };
