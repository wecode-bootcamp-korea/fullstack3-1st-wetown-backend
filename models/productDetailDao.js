import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const productDetail = async productId => {
  const detail = await prisma.$queryRaw`
    SELECT products.id, eng_name, price, is_new, is_main,quantity,sale_rate, categories.name as cate_name, subcategories.name as subcate_name, url 
    FROM products JOIN categories on category_id = categories.id
    JOIN images on products.id = images.product_id
    JOIN subcategories on subcategories.id = subcategory_id
    WHERE products.id = ${productId};
  `;

  return detail;
};

export default { productDetail };
