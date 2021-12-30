import express from 'express';
import prodctFilterRouter from './productFilterRouter';
import userCartRouter from './userCartRouter';
import userRouter from './userRouter';

const router = express.Router();

router.use('/category', prodctFilterRouter);
router.use('/cart', userCartRouter);
// router.use('/products', productRouter);
router.use('/user', userRouter);

export default router;
