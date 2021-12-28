import express from 'express';
import prodctFilterRouter from './productFilterRouter';

const router = express.Router();

router.use('/category', prodctFilterRouter);
// router.use('/products', productRouter);

export default router;
