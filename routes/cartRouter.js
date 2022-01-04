import express from 'express';
import cartController from '../controllers/cartController';

const router = express.Router();

router.get('/', cartController.cartList);
router.post('/', cartController.createCart);
router.delete('/', cartController.deleteCart);
router.put('/', cartController.updateCart);
export default router;
