import { productFilterDao } from '../models';

const productFilter = async (category, subcategory, sortMethod) => {
  let is_subcategory = false;

  if (subcategory) {
    is_subcategory = true;
  }

  const filter = await productFilterDao.productFilter(
    category,
    is_subcategory,
    subcategory,
    sortMethod
  );

  return filter;
};

export default { productFilter };
