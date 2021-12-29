import { userServices } from '../services';

//회원가입
const signUp = async (req, res) => {
  try {
    const { name, gender, phone_number, nickname, password, email } = req.body;
    const REQUIRED_KEYS = {
      name,
      gender,
      phone_number,
      nickname,
      password,
      email,
    };
    for (let key in REQUIRED_KEYS) {
      if (!REQUIRED_KEYS[key]) {
        res.send(400).json({ message: 'INVALID USER' });
      }
    }
    console.log('signUp controller', REQUIRED_KEYS);
    await userServices.signUp(
      name,
      gender,
      phone_number,
      nickname,
      password,
      email
    );
    return res.json({ message: 'SUCCESS' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
// 로그인
const signIn = async (req, res) => {
  try {
    const { nickname, password } = req.body;
    const REQUIRED_KEYS = { nickname, password };
    console.log('userController', nickname);
    for (let key in REQUIRED_KEYS) {
      if (!REQUIRED_KEYS[key]) {
        return res.status(400).json({ message: `KEY_ERROR` });
      }
    }
    console.log('id in controller: ', nickname);

    const token = await userServices.signIn(nickname, password);

    console.log('user in controller: ', token);

    return res.status(200).json({ message: 'LOGIN_SUCCESS', token });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

export default { signUp, signIn };
