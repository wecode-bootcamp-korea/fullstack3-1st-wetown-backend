import { productDetailDao } from '../models';

const productDetail = async productId => {
  const detail = await productDetailDao.productDetail(productId);

  const tmp = detail[0];

  tmp.url = detail.map((e, i) => {
    return { id: detail[i]['image_id'], image: detail[i].url };
  });

  return detail[0];
};

export default { productDetail };
