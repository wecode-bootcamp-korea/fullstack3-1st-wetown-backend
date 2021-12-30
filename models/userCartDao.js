import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//장바구니로 이동 시 유저가 가지고 있는 데이터 return
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

//유저가 장바구니에 담는 request 시에 create 수행
const addUserCart = async REQUIRED_KEYS => {
  const addCart = await prisma.$queryRaw`
    INSERT INTO
      carts(
        product_id,
        user_id
      )
    VALUES
      (
        ${REQUIRED_KEYS.product_id},
        ${REQUIRED_KEYS.user_id}
      );
  `;
  return addCart;
};

export default { allUserCart, addUserCart };
