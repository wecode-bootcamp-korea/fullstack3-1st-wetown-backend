import { cartDao } from '../models';
import { productDao } from '../models';
import { productDetailDao } from '../models';

const errStatusCode = 400;

const cartList = async user_id => {
  const getCartList = await cartDao.getCartItem(user_id);
  //카트에 담긴게 없는 경우 null을 리턴
  if (getCartList.length < 1) return getCartList;
  return getCartList;
};

const createCart = async (user_id, product_id, cart_quantity) => {
  //장바구니에 해당상품 존재 여부 check
  const [checkItem] = await cartDao.checkCartItem(user_id, product_id);
  switch (checkItem.exist) {
    //장바구니에 해당 상품 없을 경우
    case 0:
      const addCart = await cartDao.createCartItem(
        user_id,
        product_id,
        cart_quantity
      );
      //카트에 create 성공시 빈 배열 반환되므로 truthy 값 1을 return 하여 성공 여부 알려주기
      if (addCart) {
        return 1;
      }
      //제대로 create 되지 않았을 경우 에러발생
      else {
        const error = new Error('상품이 담기지 않았습니다.');
        error.statusCode = errStatusCode;
        throw error;
      }
    //장바구니에 해당상품 있을 경우 update 함수 실행
    case 1:
      const result = updateCart(user_id, product_id, cart_quantity);
      return result;
  }
};

const updateCart = async (user_id, product_id, cart_quantity) => {
  const [updateQuantity] = await cartDao.updateItemQuantity(
    user_id,
    product_id,
    cart_quantity
  );
  if (!updateQuantity) {
    return true;
  } else {
    const error = new Error('상품이 업데이트되지 않았습니다.');
    error.statusCode = errStatusCode;
    throw error;
  }
};

const deleteCart = async (user_id, product_id) => {
  const deleteItem = await cartDao.deleteCartItem(user_id, product_id);
  //카트에 담긴 상품 delete 성공시 빈 배열 반환되므로 true 값을 return 하여 성공 여부 알려주기
  if (deleteItem) {
    return true;
  }
  //delete 되지 않았을 경우 에러발생
  else {
    const error = new Error('상품이 삭제되지 않았습니다.');
    error.statusCode = errStatusCode;
    throw error;
  }
};

const allDeleteCartItem = async (user_id, product_id, quantity) => {
  for (let i = 0; i < product_id.length; i++) {
    const minusQuantity = await productDetailDao.productDetail(product_id[i]);

    if (minusQuantity[0].quantity < 0) throw new Error('수량부족');
  }

  for (let i = 0; i < product_id.length; i++) {
    await productDao.updateQuantity(product_id[i], quantity[i]);
  }

  return await cartDao.allDeleteCartItem(user_id);
};

export default {
  cartList,
  createCart,
  updateCart,
  deleteCart,
  allDeleteCartItem,
};
