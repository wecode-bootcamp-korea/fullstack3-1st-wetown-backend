import express from 'express';
import categoryListRouter from './categoryListRouter';
import productFilterRouter from './productFilterRouter';
import cartRouter from './cartRouter';
import userRouter from './userRouter';
import productDetailRouter from './productDetailRouter';
import auth from '../middleWare/auth';
import productPicRouter from './productPicRouter';

const router = express.Router();

router.use('/category', categoryListRouter);
router.use('/product/filter', productFilterRouter);
router.use('/cart', auth.authentication, cartRouter);
router.use('/user', userRouter);
router.use('/product', productDetailRouter);
router.use('/main/pictures', productPicRouter);

export default router;
