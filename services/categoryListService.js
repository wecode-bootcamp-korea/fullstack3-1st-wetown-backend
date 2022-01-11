import { categoryListDao } from '../models';

const categoryList = async () => {
  const categories = await categoryListDao.getCategoryList();

  return categories;
};

export default { categoryList };
