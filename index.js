const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const app = express();
const indexRouter = require('./server/routers/indexRouter');
const productRouter = require('./server/routers/productRouter');
const port = 8080;

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use((req, res, next) => {
    req.viewModel = {
        title: 'Checkm8s Online Shopping'
    };
    next();
})

app.set('views', path.join(__dirname, 'server/views'));
app.set('view enginge', 'pug');

app.use('/', indexRouter);
app.use('/api/getProducts', productRouter);

app.listen(port, (err) => {
    if(err) {
        return console.error(err);
    }
    console.log(`Listening to ${port}`);
});