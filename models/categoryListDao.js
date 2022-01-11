import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getCategoryList = async () => {
  const categories = await prisma.$queryRaw`
    SELECT
      id,
      name
    FROM
    categories`;
  console.log('dao---', categories);

  return categories;
};

export default { getCategoryList };
