import userCartService from '../services/userCartService';

//유저가 담은 카트 상품 정보들
const getUserCart = async (req, res) => {
  try {
    const { user_id } = req.params;
    console.log('userCartController : ', user_id);
    const userCart = await userCartService.getUserCart(user_id);
    return res.status(200).send(userCart);
  } catch (err) {
    //error handling
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};

//상품을 카트에 담을 때
const addToCart = async (req, res) => {
  try {
    const { user_id, product_id } = req.body;
    const REQUIRED_KEYS = { user_id, product_id };
    for (let key in REQUIRED_KEYS) {
      if (!REQUIRED_KEYS[key]) {
        return res.status(400).send({
          message: `카트 추가에 필요한 ${key} 정보가 올바르지 않습니다.`,
        });
      }
    }
    const addCart = await userCartService.addToCart(REQUIRED_KEYS);
    return res.status(201).send(addCart);
  } catch (err) {
    //error handling
    console.log(err);
    return res.status(err.StatusCode || 500).send({ message: err.message });
  }
};

//장바구니에 담긴 상품을 삭제할 때
const delFromCart = async (req, res) => {
  try {
    //해당상품 일괄 삭제
    const { cart_id, user_id, product_id } = req.body;
    const REQUIRED_KEYS = { cart_id, user_id, product_id };

    for (let key in REQUIRED_KEYS) {
      if (!REQUIRED_KEYS[key]) {
        return res.status(400).send({
          message: `카트에 담긴 상품 삭제에 필요한 ${key} 정보가 올바르지 않습니다.`,
        });
      }
    }
    const delCart = userCartService.delFromCart(REQUIRED_KEYS);
    return res.status(200).send({ delCart });
  } catch (err) {
    //error handling
    console.log(err);
    return res.status(err.StatusCode || 500).send({ message: err.message });
  }
};
export default { getUserCart, addToCart, delFromCart };
