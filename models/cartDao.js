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

//장바구니에 해당상품 담겨있는지 체크할 때
const checkCartItem = async (user_id, product_id) => {
  return await prisma.$queryRaw`
  SELECT EXISTS(
    SELECT
      id
    FROM
      carts
    WHERE
      user_id = ${user_id}
    AND
      product_id = ${product_id}
  ) AS exist;
  `;
};

//장바구니에 상품 추가 request시 수행할 동작
const createCartItem = async (user_id, product_id, cart_quantity) => {
  return await prisma.$queryRaw`
    INSERT INTO
      carts(
        product_id,
        user_id,
        quantity
      )
    VALUES
      (
        ${product_id},
        ${user_id},
        ${cart_quantity}
      );
  `;
};

//선택상품 갯수 업데이트 동작
const updateItemQuantity = async (user_id, product_id, cart_quantity) => {
  return await prisma.$queryRaw`
  UPDATE
    carts
  SET
    quantity = quantity + (${cart_quantity})
  WHERE
    user_id = ${user_id}
  AND
    product_id = ${product_id};
  `;
};

//선택상품 & 전체상품 선택시 일괄 삭제 동작
const deleteCartItem = async (user_id, product_id) => {
  return await prisma.$queryRaw`
    DELETE FROM
      carts
    WHERE
      user_id = ${user_id}
    AND
      product_id in (${product_id});
    `;
};

export default {
  getCartItem,
  checkCartItem,
  createCartItem,
  updateItemQuantity,
  deleteCartItem,
};
