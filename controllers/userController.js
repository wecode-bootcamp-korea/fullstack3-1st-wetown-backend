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
const signIn = async () => {};

export default { signUp, signIn };
