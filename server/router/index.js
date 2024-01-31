const express = require('express');
const router = express.Router();
const users = require('../components/users/router.js');
const login = require('../components/login/router.js');
const products = require('../components/products/router.js');
const inventario = require('../components/inventario/router.js')
const middleware = require('../middleware/sessions.js');

// Router es igual a la API

function routerApp(app) {
    app.use('/api/v1', router);
    router.use('/login', login);
    router.use('/users', middleware.auth, users);
    router.use('/products', products);
    router.use('/inventario', inventario);
}

module.exports = routerApp;





// {}||   []