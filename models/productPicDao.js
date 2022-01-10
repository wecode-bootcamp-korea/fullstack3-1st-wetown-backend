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
      images.is_main = true,
      products.id IN(1,2,3,4,11,12,13,14,21,22,23,24,31,32,33,34,41,42,43,44)
    ORDER BY
      created_at ASC
    LIMIT 20;
  `;
};

export default { productPic };
