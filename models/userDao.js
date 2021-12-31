import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 이메일 불러오기
const getUserByEmail = async email => {
  const user = await prisma.$queryRaw`
      SELECT email, password FROM users WHERE email = ${email}
    `;
  return user;
};

// 아이디 불러오기
const getUserByNickname = async nickname => {
  const user = await prisma.$queryRaw`
      SELECT email, password FROM users WHERE nickname = ${nickname}
    `;
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
  await prisma.$queryRaw`
  INSERT INTO users(name, gender, phone_number, nickname, password, email) 
  VALUES(${name}, ${gender}, ${phone_number}, ${nickname}, ${password}, ${email});
  `;
};

export default { createUser, getUserByEmail, getUserByNickname };
