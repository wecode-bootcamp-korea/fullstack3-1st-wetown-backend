import userCartService from '../services/userCartService';

const getUserCart = async (req, res) => {
  try {
    const { user_id } = req.params;
    console.log('userCartController : ', user_id);
    const userCart = await userCartService.getUserCart(user_id);
    return res.status(200).send(userCart);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message });
  }
};

export default { getUserCart };
