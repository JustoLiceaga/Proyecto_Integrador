var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')

router.get('/', indexController.index);

router.get('/detalle/:detalle?', indexController.detalle);

router.get('/register', indexController.register);

router.get('/login', indexController.register);

module.exports = router;
