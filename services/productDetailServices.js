import { productDetailDao } from '../models';

const productDetail = async productId => {
  const detail = await productDetailDao.productDetail(productId);

  return detail;
};

export default { productDetail };
