const faker = require('faker');
const boom = require('@hapi/boom');

const getAllProducts = (req, res) => {
  //const price = allPrice()
  try {
    const products = [];
    const {size} = req.query
    const limit = size || 5;

    for(let i = 0; i<limit; i++) {
      products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),

      })
  }
  return products;
  } catch (error) {
    console.log(error)
  }

}

const getOneProduct = (req, res) => {
  try {
    const {id} = req.params;
    res.json({
      'id': id,
      'name': faker.commerce.productName(),
      'price': parseInt(faker.commerce.price(), 10),
      'category': faker.commerce.department(),

    })
  } catch (error) {
    console.log(error)
  }
}

const createNewProduct = (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    res.json({
      ok: true,
      data: body
    })
  } catch (error) {
    console.log(error)
  }

}

const updateProduct = (req, res) => {

  try {
    const {id} = req.params
    /*
    if (id != 1) {
      throw boom.notFound('Producto not found')
    }
    */
    const body = req.body;

    res.json({
      message: 'succsess',
      product: body,
      id,
    })
  } catch (error) {
    console.log(error)
  }
}

const deleteProduct = (req, res) => {
  try {
    const {id} = req.params;
    res.json({
      message: 'delete',
      id
    })
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateProduct,
  deleteProduct
}
