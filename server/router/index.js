const express = require('express');
const router = express.Router();
const products = require('../components/products/router.js');
const users = require ('../components/users/router.js');
const inventario = require('../components/inventario/router.js')

// Router es igual a la API

function routerApp(app) {
    app.use('/api/v1', router);
    router.use('/products', products);
    router.use('/inventario', inventario);
    router.use('/users', users)
}

module.exports = routerApp;





// {}||   []