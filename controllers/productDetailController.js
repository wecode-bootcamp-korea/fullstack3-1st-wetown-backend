import { productDetailServices } from '../services';

const productDetail = async (req, res) => {
  try {
    const { productId } = req.params;

    const detail = await productDetailServices.productDetail(productId);

    res.status(200).send(detail);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export default { productDetail };
