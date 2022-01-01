import express from 'express';
import cartController from '../controllers/cartController';

const router = express.Router();

router.get('/:user_id', cartController.cartList);
router.post('/', cartController.createCart);
router.delete('/', cartController.deleteCart);
router.put('/:user_id', cartController.updateCart);
export default router;
