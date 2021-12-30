import userCartDao from '../models/userCartDao';

const errStatusCode = 400;

const getUserCart = async user_id => {
  const userCart = await userCartDao.allUserCart(user_id);
  //카트에 담긴게 없는 경우 null을 리턴
  if (!userCart) return null;
  return userCart;
};

const addToCart = async REQUIRED_KEYS => {
  const addCart = await userCartDao.addUserCart(REQUIRED_KEYS);
  //카트에 create 성공시 빈 배열 반환되므로 true 값을 return 하여 성공 여부 알려주기
  if (addCart) {
    return true;
  }
  //제대로 create 되지 않았을 경우 에러발생
  else {
    const error = new Error('상품이 담기지 않았습니다.');
    error.statusCode = errStatusCode;
    throw error;
  }
};

const delFromCart = async REQUIRED_KEYS => {
  const delCart = await userCartDao.delUserCart(REQUIRED_KEYS);
  console.log('###CARTSERVICE DELETE: ', delCart);
  //카트에 담긴 상품 delete 성공시 빈 배열 반환되므로 true 값을 return 하여 성공 여부 알려주기
  if (delCart) {
    return true;
  }
  //delete 되지 않았을 경우 에러발생
  else {
    const error = new Error('상품이 삭제되지 않았습니다.');
    error.statusCode = errStatusCode;
    throw error;
  }
};
export default { getUserCart, addToCart, delFromCart };
