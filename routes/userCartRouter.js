import express from 'express';
import userCartController from '../controllers/userCartController';

const router = express.Router();

router.get('/:user_id', userCartController.getUserCart);
router.post('/', userCartController.addToCart);
router.delete('/', userCartController.delFromCart);

export default router;
