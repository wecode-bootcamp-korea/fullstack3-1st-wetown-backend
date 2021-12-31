import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//장바구니 리스트 불러오는 request시 수행할 동작
const allUserCart = async user_id => {
  const getAllUserCart = await prisma.$queryRaw`
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
  return getAllUserCart;
};

//장바구니에 상품 추가 request시 수행할 동작
const addUserCart = async REQUIRED_KEYS => {
  const createToUserCart = await prisma.$queryRaw`
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
  return createToUserCart;
};

//장바구니에 담긴 상품 삭제 request시 수행할 동작
const delUserCart = async REQUIRED_KEYS => {
  let delFromUserCart;
  const [product_id] = REQUIRED_KEYS.product_id;
  console.log(product_id);
  //여러 상품 일괄 삭제 동작
  if (!REQUIRED_KEYS.product_id.length > 1) {
    delFromUserCart = await prisma.$queryRaw`
    DELETE FROM
      carts
    WHERE
      user_id = ${REQUIRED_KEYS.user_id}
    AND
      product_id in (${[REQUIRED_KEYS.product_id]});
    `;
  } else {
    //해당상품 갯수 1개씩 삭제 동작
    delFromUserCart = await prisma.$queryRaw`
      DELETE FROM
        carts
      WHERE
        user_id = ${REQUIRED_KEYS.user_id},
      AND
        product_id = ${[REQUIRED_KEYS.product_id]}
      LIMIT
        1;
    `;
  }

  return delFromUserCart;
};

export default { allUserCart, addUserCart, delUserCart };
