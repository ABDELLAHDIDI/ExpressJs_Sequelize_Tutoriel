
const express = require('express');

const ProductController =   require('../controllers/ProductController');
const productRouter = express.Router()

productRouter.route('/')
                    .get(ProductController.getProducts)
                    .post(ProductController.createProduct)
                    .put(ProductController.updateProduct)
productRouter.route('/:id')
                    .get(ProductController.getProduct)
                    .delete(ProductController.deleteProduct)

module.exports = productRouter