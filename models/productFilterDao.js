import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const allProductNewestFilter = async category_id => {
  const newest = await prisma.$queryRaw`
    select 
  `;
};

// url localhost:8000/category/2/?sort_method=1
// select products.id, eng_name, price, is_new, sale, name, url from products join categories on category_id = categories.id join images on products.id = images.product_id where images.is_main=true;
// select products.id, eng_name, price, is_new, sale, name, subcategories.name, url from products
// join categories on category_id = categories.id join images on products.id = images.product_id join
