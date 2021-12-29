import express from 'express';
import prodctFilterRouter from './productFilterRouter';
import userRouter from './userRouter';

const router = express.Router();

router.use('/category', prodctFilterRouter);
router.use('/signUp', userRouter);

export default router;
