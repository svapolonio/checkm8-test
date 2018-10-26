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

module.exports = router;