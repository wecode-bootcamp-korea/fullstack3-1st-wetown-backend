import express from 'express';
import productFilterRouter from './productFilterRouter';
import cartRouter from './cartRouter';
import userRouter from './userRouter';
import productDetailRouter from './productDetailRouter';

const router = express.Router();

router.use('/product/filter', productFilterRouter);
router.use('/cart', cartRouter);
// router.use('/products', productRouter);
router.use('/user', userRouter);
router.use('/product', productDetailRouter);

export default router;
