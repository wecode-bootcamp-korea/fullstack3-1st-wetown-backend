import { categoryListService } from '../services';

const categoryList = async (req, res) => {
  try {
    const categories = await categoryListService.categoryList();

    res.status(200).send(categories);
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
};

export default { categoryList };
