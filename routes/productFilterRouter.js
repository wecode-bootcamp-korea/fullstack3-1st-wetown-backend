import express from 'express';
import { productFilterController } from '../controllers';

const router = express.Router();

//각 카테고리로 이동시의 값, 그 카테고리의 all아이템 최신,이름,낮음,높음 정렬시의 값
//각 카테고리로 이동(나브바에서 카테고리 클릭) - url ->ex) localhost:8000/category/dog
//각 카테고리의 정렬순(list페이지에서 모든아이템이 있을때 필터정렬) - url ->ex) localhost:8000/category/dog/?sortMethod=1
//sortMethod 1 = 최신, 2 = name, 3 = 가격낮은순, 4 = 가격높은순
router.get('/:category', productFilterController.allProductFilter);
//각 카테고리의 서브카테고리로 이동시의 값 서브 카테고리의 아이템 정렬
//ex) localhost:8000/category/dog/toy?sortMethod=1
//sortMethod 1 = 최신, 2 = name, 3 = 가격낮은순, 4 = 가격높은순
router.get(
  '/:category/:subcategory',
  productFilterController.sortProductFilter
);
export default router;
