const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/detalle/:detalle?', productController.detalle);

router.get('/editar', productController.editar)

router.get('/search-results', productController.search)

router.get('/product-add', productController.editar)



module.exports = router;
