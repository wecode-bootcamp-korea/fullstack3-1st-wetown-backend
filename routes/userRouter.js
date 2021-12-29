import express from 'express';
import { userController } from '../controllers';

const router = express.Router();

console.log('userRouter');

router.post('/signup', userController.signUp);
router.post('/signin', userController.signIn);

export default router;
