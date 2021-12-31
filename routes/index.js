import express from 'express';
import productFilterRouter from './productFilterRouter';
import userRouter from './userRouter';

const router = express.Router();

router.use('/category', productFilterRouter);
router.use('/user', userRouter);

export default router;
