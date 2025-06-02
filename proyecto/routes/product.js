const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/detalle/:id', productController.detalle);

router.get('/editar', productController.editar)

router.get('/search-results', productController.search)

router.get('/product-add', productController.editar)

router.get('/createProductadd', productController.createProductadd)



module.exports = router;
