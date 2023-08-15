const express = require('express')
const productsServices = require('../services/servicesProducts');
const router = express.Router();
const validatorHendler = require('../middleware/validator.handler');
const { schemaProductCreate, updateSchemaProduct, getProductSchema } = require('../schema/schemaProducts');


router.get('/:id', validatorHendler(getProductSchema, 'params'),
  async (req, res) => {
  const getOneProduct = await productsServices.getOneProduct(req, res);
  return getOneProduct;
})

router.get('/', async (req, res, next) => {
  try {
    const products = await productsServices.getAllProducts(req, res);
    res.json(products);
  } catch (error) {
    next(error);
  }
})


router.post('/', validatorHendler(schemaProductCreate, 'body'),
  async (req, res) => {
 const createProduct = await productsServices.createNewProduct(req, res);
 return createProduct
})

router.patch('/:id',
  validatorHendler(updateSchemaProduct, 'body'),
  validatorHendler(getProductSchema, 'params'),
  async (req, res) => {
  const updateProduct = await productsServices.updateProduct(req, res);
  res.json(updateProduct);
})

router.delete('/:id', async (req, res) => {
  const deleteProduct = await productsServices.deleteProduct(req, res);
  return deleteProduct;
})


module.exports = router;
