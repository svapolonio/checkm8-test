const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');

const store = new SimpleJsonStore('./products.json', {
  products: [] 
});

router.get('/', (req, res, next) => {
  console.log('Product Page!');
  next();
}, (req, res) => {
  res.json(store.get('products'));
});

router.post('/', (req, res) => {
  const products = store.get('products');
  const newProduct = {
    id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity
  };

  products.push(newProduct);
  store.set('products', products);

  res.json(products);
});

module.exports = router;