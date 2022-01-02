import express from 'express';
import productFilterRouter from './productFilterRouter';
import userRouter from './userRouter';
import productDetailRouter from './productDetailRouter';

const router = express.Router();

router.use('/product/filter', productFilterRouter);
router.use('/user', userRouter);
router.use('/product/', productDetailRouter);

export default router;
