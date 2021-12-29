import express from 'express';
import userCartController from '../controllers/userCartController';

const router = express.Router();

router.get('/:user_id', userCartController.getUserCart);

export default router;
