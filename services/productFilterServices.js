import { productFilterDao } from '../models';

const allProductFilter = async (category, sortMethod) => {
  if (+sortMethod > 4 || +sortMethod < 1)
    throw new Error('sortMethod 확인바람');

  if (category && +sortMethod === 1) {
    const newest = await productFilterDao.allProductNewestFilter(category);
    return newest;
  } else if (category && +sortMethod === 2) {
    const name = await productFilterDao.allProductNameFilter(category);
    return name;
  } else if (category && +sortMethod === 3) {
    const low = await productFilterDao.allProductLowFilter(category);
    return low;
  } else if (category && +sortMethod === 4) {
    const high = await productFilterDao.allProductHighFilter(category);
    return high;
  } else {
    const first = await productFilterDao.firstProductFilter(category);
    return first;
  }
};

const sortProductFilter = async (category, subcategory, sortMethod) => {
  if (+sortMethod > 4 || +sortMethod < 1)
    throw new Error('sortMethod 확인바람');

  if (category && subcategory && +sortMethod === 1) {
    const newest = await productFilterDao.sortProductNewestFilter(
      category,
      subcategory
    );
    return newest;
  } else if (category && subcategory && +sortMethod === 2) {
    const name = await productFilterDao.sortProductNameFilter(
      category,
      subcategory
    );
    return name;
  } else if (category && subcategory && +sortMethod === 3) {
    const low = await productFilterDao.sortProductLowFilter(
      category,
      subcategory
    );
    return low;
  } else if (category && subcategory && +sortMethod === 4) {
    const high = await productFilterDao.sortProductHighFilter(
      category,
      subcategory
    );
    return high;
  } else {
    const first = await productFilterDao.sortProductFilter(
      category,
      subcategory
    );
    return first;
  }
};

export default { allProductFilter, sortProductFilter };
