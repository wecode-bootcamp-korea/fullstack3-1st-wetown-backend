import express from 'express';
import { productDetailController } from '../controllers';

const router = express.Router();

router.get('/:productId', productDetailController.productDetail);

export default router;
