import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//장바구니 리스트 불러오는 request시 수행할 동작
const getCartItem = async user_id => {
  return await prisma.$queryRaw`
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
};

//장바구니에 상품 추가 request시 수행할 동작
const createCartItem = async (user_id, product_id) => {
  const createToUserCart = await prisma.$queryRaw`
    INSERT INTO
      carts(
        product_id,
        user_id
      )
    VALUES
      (
        ${product_id},
        ${user_id}
      );
  `;
  return createToUserCart;
};

//장바구니에 담긴 상품 삭제 request시 수행할 동작
const deleteCartItem = async (user_id, product_id) => {
  let delFromUserCart;
  //product_id가 배열로 들어올 시 처리

  //여러 상품 일괄 삭제 동작
  if (!product_id.length > 1) {
    delFromUserCart = await prisma.$queryRaw`
    DELETE FROM
      carts
    WHERE
      user_id = ${user_id}
    AND
      product_id in (${product_id});
    `;
  } else {
    //해당상품 갯수 1개씩 삭제 동작
    delFromUserCart = await prisma.$queryRaw`
      DELETE FROM
        carts
      WHERE
        user_id = ${user_id},
      AND
        product_id = ${product_id}
      LIMIT
        1;
    `;
  }

  return delFromUserCart;
};

export default { getCartItem, createCartItem, deleteCartItem };
