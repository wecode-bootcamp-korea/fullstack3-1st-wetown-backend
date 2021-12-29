import { userCartDao } from '../models/userCartDao';

const getUserCart = async user_id => {
  console.log('userCartService : ', user_id);
  const userCart = await userCartDao.allUserCart(user_id);
  //카트에 담긴게 없는 경우 false를 리턴
  if (!userCart) return false;
  return userCart;
};

export default { getUserCart };
