import userCartService from '../services/userCartService';

//유저가 담은 카트 정보
const getUserCart = async (req, res) => {
  try {
    const { user_id } = req.params;
    console.log('userCartController : ', user_id);
    const userCart = await userCartService.getUserCart(user_id);
    return res.status(200).send(userCart);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};

const addToCart = async (req, res) => {
  try {
    const { user_id, product_id } = req.body;
    const REQUIRED_KEYS = { user_id, product_id };
    for (let key in REQUIRED_KEYS) {
      if (!REQUIRED_KEYS[key]) {
        return res
          .status(err.statusCode || 500)
          .send({ message: '유저정보 or 상품정보가 올바르지 않습니다.' });
      }
    }
    const addCart = await userCartService.addToCart(REQUIRED_KEYS);
    return res.status(201).send(addCart);
  } catch (err) {
    console.log(err);
    return res.status(errStatusCode || 500).send({ message: err.message });
  }
};

export default { getUserCart, addToCart };
