import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//회원가입
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
  VALUES("관리자","중성","010-1234-5678","admin","1234","admin@wetown.com");
  `;
};

//로그인
const signIn = async () => {};

export default { createUser, signIn };
