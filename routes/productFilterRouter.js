import express from 'express';
import { productFilterController } from '../controllers';

const router = express.Router();

// 카테고리값, 서브카테고리값, sortMethod값
//http://localhost:8000/product/filter/dog/?subcategory=toy&sortMethod=1
// 카테고리값, sortMethod값
//http://localhost:8000/product/filter/dog/?sortMethod=1
// 카테고리값
//http://localhost:8000/product/filter/dog
router.get('/:category/', productFilterController.productFilter);

export default router;
