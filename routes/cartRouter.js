import express from 'express';
import cartController from '../controllers/cartController';

const router = express.Router();

router.post('/list', cartController.cartList);
router.post('/', cartController.createCart);
router.delete('/', cartController.deleteCart);
router.put('/', cartController.updateCart);
router.post('/sale-completion', cartController.allDeleteCartItem);

export default router;
