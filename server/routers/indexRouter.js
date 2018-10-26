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
    res.json(store.get('products'));
});

router.get('/viewProduct', function getStoreProductPage(req, res) {
    res.render('viewProduct.pug');
})

module.exports = router;