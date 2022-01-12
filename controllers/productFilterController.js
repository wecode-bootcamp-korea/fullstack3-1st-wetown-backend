import { productFilterServices } from '../services';

const productFilter = async (req, res) => {
  try {
    const { category } = req.params;
    const { sortMethod, subcategory } = req.query;

    const filter = await productFilterServices.productFilter(
      category,
      subcategory,
      +sortMethod
    );

    res.status(200).send(filter);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

//allProductNewestFilter
export default { productFilter };
