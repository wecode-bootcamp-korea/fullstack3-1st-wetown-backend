import { productFilterServices } from '../services';

const allProductFilter = async (req, res) => {
  try {
    const { category } = req.params; //dog
    const { sortMethod } = req.query; //1
    //localhost:8000/categoty/dog?sortMethod=1
    const filter = await productFilterServices.allProductFilter(
      category,
      sortMethod
    );

    res.status(200).send(filter);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const sortProductFilter = async (req, res) => {
  try {
    const { category, subcategory } = req.params;
    const { sortMethod } = req.query;

    const filter = await productFilterServices.sortProductFilter(
      category,
      subcategory,
      sortMethod
    );

    res.status(200).send(filter);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

//allProductNewestFilter
export default { allProductFilter, sortProductFilter };
