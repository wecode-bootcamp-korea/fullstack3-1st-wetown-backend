import { productPicDao } from '../models';

const productPic = async category => {
  const pic = await productPicDao.productPic();

  return pic;
};

export default { productPic };
