const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/register', userController.register);

router.post('/newuser', userController.create); 

router.post('/processlogin', userController.processLogin)

router.get('/login', userController.login);

router.get('/profile/:id', userController.profile)

router.get('/logout', userController.logout)


module.exports = router;
