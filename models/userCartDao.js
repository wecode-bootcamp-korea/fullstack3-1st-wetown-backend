import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//장바구니로 이동 시
const allUserCart = async user_id => {
  console.log('userCartDao : ', user_id);
  const userCart = await prisma.$queryRaw`
  SELECT
    carts.id, 
    product_id, 
    products.kor_name,
    products.eng_name,
    products.price,
    products.sale_rate
  FROM
    carts
  JOIN
    products
  ON
    product_id = products.id
  WHERE
    user_id = ${user_id};
  `;
  return userCart;
};

export default { allUserCart };
