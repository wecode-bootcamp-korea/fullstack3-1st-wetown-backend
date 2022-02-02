import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const productPic = async () => {
  return await prisma.$queryRaw`
    SELECT
      products.id,
      eng_name,
      categories.name,
      url 
    FROM
      products
    JOIN
      categories on category_id = categories.id
    JOIN
      images on products.id = images.product_id
    WHERE
      products.id IN(
        1,2,3,4,5,6,7,8,9,
        11,12,13,14,15,16,17,18,19,
        21,22,23,24,25,26,27,28,29,
        31,32,33,34,35,36,37,38,39,
        41,42,43,44,45,46,47,48,49
        ) and images.is_main = true
    LIMIT 45;
  `;
};

export default { productPic };
