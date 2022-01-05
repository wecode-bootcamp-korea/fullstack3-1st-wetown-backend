import { cartService } from '../services';

//유저가 담은 카트 상품 정보들 불러올 때(READ)
const cartList = async (req, res) => {
  try {
    // const user_id = req.userId;
    const { user_id } = req.body;
    //middleware통과 후, token에서 받은 유저 정보를 사용하기
    const getCartList = await cartService.cartList(user_id);
    if (!getCartList) {
      return res.status(200).send({
        message: '카트에 담긴 상품이 없습니다.',
        result: getCartList,
      });
    }
    return res.status(200).send({
      message: '카트목록을 불러오는 데 성공했습니다.',
      result: getCartList,
    });
  } catch (err) {
    //error handling
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};

//상품을 카트에 담을 때(CREATE)
const createCart = async (req, res) => {
  try {
    //middleware 로 user_id 받아오기
    // const user_id = req.userId;
    const { user_id, product_id, cart_quantity } = req.body;
    const REQUIRED_KEYS = { user_id, product_id, cart_quantity };

    let success_msg = '';

    //카트에 담을 상품 갯수가 falsy한 값일 경우 default = 1로 세팅해준다.
    if (!REQUIRED_KEYS.cart_quantity) {
      REQUIRED_KEYS['cart_quantity'] = 1;
    }
    for (let key in REQUIRED_KEYS) {
      if (!REQUIRED_KEYS[key]) {
        return res.status(400).send({
          message: `카트 추가에 필요한 ${key} 정보가 올바르지 않습니다.`,
        });
      }
    }
    const addCart = await cartService.createCart(
      user_id,
      product_id,
      cart_quantity
    );
    switch (addCart) {
      case 1:
        success_msg = '카트에 해당 상품 추가를 성공하였습니다.';
        break;
      case true:
        success_msg = '카트에 해당 상품 갯수 추가를 성공하였습니다.';
        break;
    }
    return res.status(201).send({
      message: success_msg,
      result: true,
    });
  } catch (err) {
    //error handling
    console.log(err);
    return res.status(err.StatusCode || 500).send({ message: err.message });
  }
};

//장바구니에 담긴 상품 갯수 변경(UPDATE)
const updateCart = async (req, res) => {
  try {
    //middleware 로 user_id 받아오기
    // const user_id = req.userId;
    const { user_id, product_id, cart_quantity } = req.body;
    const updateQuantity = await cartService.updateCart(
      user_id,
      product_id,
      cart_quantity
    );
    return res.status(200).send({
      message: '카트에 해당 상품 갯수 업데이트를 성공하였습니다.',
      result: updateQuantity,
    });
  } catch (err) {
    //error handling
    console.log('updateCart:', err);
    return res.status(err.StatusCode || 500).send({ message: err.message });
  }
};

//장바구니에 담긴 상품을 삭제할 때(DELETE)
const deleteCart = async (req, res) => {
  try {
    //middleware 로 user_id 받아오기
    // const user_id = req.userId;
    const { user_id, product_id } = req.body;
    const REQUIRED_KEYS = { user_id, product_id };

    for (let key in REQUIRED_KEYS) {
      if (!REQUIRED_KEYS[key]) {
        return res.status(400).send({
          message: `카트에 담긴 상품 삭제에 필요한 ${key} 정보가 올바르지 않습니다.`,
        });
      }
    }
    const deleteCartItem = cartService.deleteCart(user_id, product_id);
    return res.status(204).send({
      message: '카트에 해당 상품 삭제를 성공하였습니다.',
      result: deleteCartItem,
    });
  } catch (err) {
    //error handling
    console.log(err);
    return res.status(err.StatusCode || 500).send({ message: err.message });
  }
};
export default {
  cartList,
  createCart,
  updateCart,
  deleteCart,
};
