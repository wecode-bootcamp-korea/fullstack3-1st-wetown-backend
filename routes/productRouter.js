import express from 'express';
import { productController } from '../controllers';

const router = express.Router();

router.post('/signup', userControllers.signUp);
router.post('/signin', userControllers.signIn);

export default router;
