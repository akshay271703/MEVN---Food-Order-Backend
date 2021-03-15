const express = require('express')
const router = express.Router()


const productController = require('../Controllers/productController.js')

router.get('/products', productController.products_fetch)
router.post('/products/add', productController.product_add)
router.post('/products/edit/:id', productController.product_update)
router.post('/products/delete/:id', productController.product_delete)
router.post('/products/buy/:id', productController.product_buy)

module.exports = router