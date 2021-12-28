import { productFilterServices } from '../services';

const allProductFilter = async (req, res) => {
  try {
    const { category } = req.params;
    const { sortMethod } = req.query;

    const newest = await productFilterServices.allProductFilter(
      category,
      sortMethod
    );

    res.status(200).send(newest);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
//allProductNewestFilter
export default { allProductFilter };
