const express = require('express');
const router = express.Router();
const SimpleJsonStore = require('simple-json-store');

const store = new SimpleJsonStore('./products.json', {
    products: []
});

router.get('/', function getIndexPage(req, res) {
    let viewModel = req.viewModel;
    viewModel.products = store.get('products');
    res.render('index.pug', viewModel);
});


//Get Product
router.get('/getProducts', (req, res, next) => {
    console.log('Product Router!');
    next();
  }, (req, res) => {
    res.json(store.get('products'));
});

//Add Product
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

//Delete Product
router.delete('/deleteProduct/:id', (req, res) => {
    const id = req.params.id;
    const products = store.get('products');
    const newProducts = products.filter(product => Number(product.id) !== Number(id));
  
    store.set('products', newProducts);
    res.json(newProducts);
    
});


module.exports = router;