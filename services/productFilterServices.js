import { productFilterDao } from '../models';

const allProductFilter = async (category, sortMethod) => {
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

export default { allProductFilter };
