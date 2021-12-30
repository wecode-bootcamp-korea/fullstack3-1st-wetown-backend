import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 이메일 불러오기
const getUserByEmail = async email => {
  console.log('email in model: ', email);
  const user = await prisma.$queryRaw`
      SELECT email, password FROM users WHERE email = ${email}
    `;
  console.log('user in model: ', user);
  return user;
};

// 아이디 불러오기
const getUserByNickname = async nickname => {
  console.log('nickname in model: ', nickname);
  const user = await prisma.$queryRaw`
      SELECT email, password FROM users WHERE nickname = ${nickname}
    `;
  console.log('user in model: ', user);
  return user;
};

// 계정 생성
const createUser = async (
  name,
  gender,
  phone_number,
  nickname,
  password,
  email
) => {
  console.log('createUser :', name, phone_number, password);
  await prisma.$queryRaw`
  INSERT INTO users(name, gender, phone_number, nickname, password, email) 
  VALUES(${name}, ${gender}, ${phone_number}, ${nickname}, ${password}, ${email});
  `;
};

export default { createUser, getUserByEmail, getUserByNickname };
