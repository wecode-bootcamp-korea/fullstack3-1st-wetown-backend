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

    await userServices.signUp(
      name,
      gender,
      phone_number,
      nickname,
      password,
      email
    );

    const token = await userServices.signIn(email, password);

    console.log('signup user in controller ', token);

    return res.json({ message: 'SUCCESS', token: token });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// 로그인
const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const REQUIRED_KEYS = { email, password };

    for (let key in REQUIRED_KEYS) {
      if (!REQUIRED_KEYS[key]) {
        return res.status(400).json({ message: `KEY_ERROR` });
      }
    }

    const token = await userServices.signIn(email, password);

    console.log('user in controller: ', token);

    return res.status(200).json({ message: 'LOGIN_SUCCESS', token: token });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

export default { signUp, signIn };
