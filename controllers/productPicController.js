import { productPicServices } from '../services';

const productPic = async (req, res) => {
  try {
    const pic = await productPicServices.productPic();

    res.status(200).json(pic);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

export default { productPic };
