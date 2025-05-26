const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/register', userController.register);

router.post('/newuser', userController.create); 

router.get('/login', userController.login);

router.get('/profile', userController.profile)

module.exports = router;
