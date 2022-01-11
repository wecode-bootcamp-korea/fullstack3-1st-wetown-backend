import express from 'express';
import { categoryListController } from '../controllers';

const router = express.Router();

router.get('/', categoryListController.categoryList);

export default router;
