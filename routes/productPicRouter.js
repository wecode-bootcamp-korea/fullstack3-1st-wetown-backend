import express from 'express';
import { productPicController } from '../controllers';

const router = express.Router();

router.get('/', productPicController.productPic);

export default router;
