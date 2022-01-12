import { productPicDao } from '../models';

const productPic = async category => {
  return await productPicDao.productPic();
};

export default { productPic };
