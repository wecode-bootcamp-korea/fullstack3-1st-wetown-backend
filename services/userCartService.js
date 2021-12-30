import userCartDao from '../models/userCartDao';

const getUserCart = async user_id => {
  console.log('userCartService : ', user_id);
  const [userCart] = await userCartDao.allUserCart(user_id);
  //카트에 담긴게 없는 경우 false를 리턴
  if (!userCart) return false;
  return userCart;
};

const addToCart = async REQUIRED_KEYS => {
  const [addCart] = await userCartDao.addUserCart(REQUIRED_KEYS);
  //카트에 create 성공시 아무것도 뱉지 않기때문에 true 값으로 성공되었다고 return
  if (!addCart) return true;
  //제대로 create 되지 않았을 경우 return 되는 값 controller 에 return
  else return addCart;
};

export default { getUserCart, addToCart };
