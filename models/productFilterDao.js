import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const productFilter = async (
  category,
  is_subcategory,
  subcategory,
  sortMethod
) => {
  return await prisma.$queryRaw`
    SELECT
      products.id,
      eng_name,
      price,
      is_new, sale_rate,
      categories.name as cate_name,
      subcategories.name as subcate_name,
      url 
    FROM
      products
    JOIN
      categories on category_id = categories.id
    JOIN
      images on products.id = images.product_id
    JOIN
      subcategories on subcategories.id = subcategory_id
    WHERE
      if(${is_subcategory},
        categories.name = ${category} and subcategories.name = ${subcategory} and images.is_main = true,
        categories.name = ${category} and  images.is_main = true)
    ORDER BY
        case WHEN ${sortMethod} = 1 then created_at end ASC,
        case WHEN ${sortMethod} = 2 then eng_name end ASC,
        case WHEN ${sortMethod} = 3 then price end ASC,
        case WHEN ${sortMethod} = 4 then price end DESC;
  `;
};

export default { productFilter };
