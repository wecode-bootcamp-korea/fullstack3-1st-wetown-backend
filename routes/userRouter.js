const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

console.log('userRouter');

router.post('/signin', userController.signIn);
router.post('/signup', userController.signUp);

export default { router };
