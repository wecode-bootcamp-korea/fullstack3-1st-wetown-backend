import express from 'express';
import prodctFilterRouter from './productFilterRouter';
import cartRouter from './cartRouter';
import userRouter from './userRouter';

const router = express.Router();

router.use('/category', prodctFilterRouter);
router.use('/cart', cartRouter);
// router.use('/products', productRouter);
router.use('/user', userRouter);

export default router;
