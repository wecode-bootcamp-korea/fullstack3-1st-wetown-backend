import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//카테고리의 값만 담겨져있을때
const firstProductFilter = async category => {
  const first = await prisma.$queryRaw`
    SELECT products.id, eng_name, price, is_new, sale_rate, categories.name as cate_name, subcategories.name as subcate_name, url 
    FROM products JOIN categories on category_id = categories.id
    JOIN images on products.id = images.product_id
    JOIN subcategories on subcategories.id = subcategory_id
    WHERE categories.name = ${category} and images.is_main = true
    order by created_at ASC
  `;
  return first;
};
//카테고리의 값과 sort값이 1일때 ( 최신 )
const allProductNewestFilter = async category => {
  const newest = await prisma.$queryRaw`
    SELECT products.id, eng_name, price, is_new, sale_rate, categories.name as cate_name, subcategories.name as subcate_name, url 
    FROM products JOIN categories on category_id = categories.id
    JOIN images on products.id = images.product_id
    JOIN subcategories on subcategories.id = subcategory_id
    WHERE categories.name = ${category} and images.is_main = true
    order by created_at ASC
  `;
  return newest;
};
//카테고리의 값과 sort값이 2일때 ( 상품명 )
const allProductNameFilter = async category => {
  const name = await prisma.$queryRaw`
    SELECT products.id, eng_name, price, is_new, sale_rate, categories.name as cate_name, subcategories.name as subcate_name, url 
    FROM products JOIN categories on category_id = categories.id
    JOIN images on products.id = images.product_id
    JOIN subcategories on subcategories.id = subcategory_id
    WHERE categories.name = ${category} and images.is_main = true
    order by eng_name ASC
  `;
  return name;
};
//카테고리의 값과 sort값이 3일때 ( 가격낮은순 )
const allProductLowFilter = async category => {
  const low = await prisma.$queryRaw`
    SELECT products.id, eng_name, price, is_new, sale_rate, categories.name as cate_name, subcategories.name as subcate_name, url 
    FROM products JOIN categories on category_id = categories.id
    JOIN images on products.id = images.product_id
    JOIN subcategories on subcategories.id = subcategory_id
    WHERE categories.name = ${category} and images.is_main = true
    order by price ASC
  `;
  return low;
};
//카테고리의 값과 sort값이 4일때 ( 가격높은순 )
const allProductHighFilter = async category => {
  const high = await prisma.$queryRaw`
    SELECT products.id, eng_name, price, is_new, sale_rate, categories.name as cate_name, subcategories.name as subcate_name, url 
    FROM products JOIN categories on category_id = categories.id
    JOIN images on products.id = images.product_id
    JOIN subcategories on subcategories.id = subcategory_id
    WHERE categories.name = ${category} and images.is_main = true
    order by price DESC
  `;
  return high;
};

//카테고리와 서브카테고리의 값만 담겨져있을때
const sortProductFilter = async (category, subcategory) => {
  const sortFirst = await prisma.$queryRaw`
    SELECT products.id, eng_name, price, is_new, sale_rate, categories.name as cate_name, subcategories.name as subcate_name, url 
    FROM products JOIN categories on category_id = categories.id
    JOIN images on products.id = images.product_id
    JOIN subcategories on subcategories.id = subcategory_id
    WHERE categories.name = ${category} and images.is_main = true and subcategories.name = ${subcategory}
    order by created_at ASC
  `;
  return sortFirst;
};
//카테고리와 서브카테고리 값과 sort값이 1일때 ( 최신 )
const sortProductNewestFilter = async (category, subcategory) => {
  const sortNewest = await prisma.$queryRaw`
    SELECT products.id, eng_name, price, is_new, sale_rate, categories.name as cate_name, subcategories.name as subcate_name, url 
    FROM products JOIN categories on category_id = categories.id
    JOIN images on products.id = images.product_id
    JOIN subcategories on subcategories.id = subcategory_id
    WHERE categories.name = ${category} and images.is_main = true and subcategories.name = ${subcategory}
    order by created_at ASC
  `;
  return sortNewest;
};
//카테고리와 서브카테고리 값과 sort값이 2일때 ( 상품명 )
const sortProductNameFilter = async (category, subcategory) => {
  const sortName = await prisma.$queryRaw`
    SELECT products.id, eng_name, price, is_new, sale_rate, categories.name as cate_name, subcategories.name as subcate_name, url 
    FROM products JOIN categories on category_id = categories.id
    JOIN images on products.id = images.product_id
    JOIN subcategories on subcategories.id = subcategory_id
    WHERE categories.name = ${category} and images.is_main = true and subcategories.name = ${subcategory}
    order by eng_name ASC
  `;
  return sortName;
};
//카테고리와 서브카테고리 값과 sort값이 3일때 ( 가격낮은순 )
const sortProductLowFilter = async (category, subcategory) => {
  const sortLow = await prisma.$queryRaw`
    SELECT products.id, eng_name, price, is_new, sale_rate, categories.name as cate_name, subcategories.name as subcate_name, url 
    FROM products JOIN categories on category_id = categories.id
    JOIN images on products.id = images.product_id
    JOIN subcategories on subcategories.id = subcategory_id
    WHERE categories.name = ${category} and images.is_main = true and subcategories.name = ${subcategory}
    order by price ASC
  `;
  return sortLow;
};
//카테고리와 서브카테고리 값과 sort값이 4일때 ( 가격높은순 )
const sortProductHighFilter = async (category, subcategory) => {
  const sortHigh = await prisma.$queryRaw`
    SELECT products.id, eng_name, price, is_new, sale_rate, categories.name as cate_name, subcategories.name as subcate_name, url 
    FROM products JOIN categories on category_id = categories.id
    JOIN images on products.id = images.product_id
    JOIN subcategories on subcategories.id = subcategory_id
    WHERE categories.name = ${category} and images.is_main = true and subcategories.name = ${subcategory}
    order by price DESC
  `;
  return sortHigh;
};

export default {
  firstProductFilter,
  allProductNewestFilter,
  allProductNameFilter,
  allProductLowFilter,
  allProductHighFilter,
  sortProductFilter,
  sortProductNewestFilter,
  sortProductNameFilter,
  sortProductLowFilter,
  sortProductHighFilter,
};

// url localhost:8000/category/2/?sort_method=1
// select products.id, eng_name, price, is_new, sale_rate, name, url, created_at from products JOIN categories on category_id = categories.id join images on products.id = images.product_id where images.is_main=true order by created_at ASC;
// select products.id, eng_name, price, is_new, sale_rate, categories.name as cate_name, subcategories.name as subcate_name, url from products join categories on category_id = categories.id join images on products.id = images.product_id join subcategories on subcategories.id = subcategory_id where categories.name = "dog" and images.is_main = true order by created_at ASC;
