import express from 'express';
import prodctFilterRouter from './productFilterRouter';
import userCartRouter from './userCartRouter';

const router = express.Router();

router.use('/category', prodctFilterRouter);
router.use('/cart', userCartRouter);
// router.use('/products', productRouter);

export default router;
