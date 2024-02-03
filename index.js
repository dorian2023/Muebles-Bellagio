const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const routerApp = require('./server/router/index.js');
const session = require('./server/middleware/sessions.js');

//const admin = require('./firebase/firebase.config.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

routerApp(app);


// Esto te muestra las rutas de tu proyecto
console.log(path.resolve(__dirname, 'client'));

// rutas visuales (HTML, CSS, img, JAVASCRIPT)
app.use(express.static(path.resolve(__dirname, 'client')));
app.use('/', express.static(path.resolve(__dirname, 'client', 'login')));
app.use('/register', express.static(path.resolve(__dirname, 'client', 'register')));
app.use('/dashboard/:id', express.static(path.resolve(__dirname, 'client', 'img')), express.static(path.resolve(__dirname, 'client', 'dashboard')));
app.use('/dashboard/admin/:id', express.static(path.resolve(__dirname, 'client', 'img')), express.static(path.resolve(__dirname, 'client', 'dashboard')));
app.use('/dashboard/trabajador/:id', express.static(path.resolve(__dirname, 'client', 'img')), express.static(path.resolve(__dirname, 'client', 'dashboard')));
app.use('/products/admin/:id', session.auth, express.static(path.resolve(__dirname, 'client', 'products')));
app.use('/dashboard/trabajador/products/:id', session.auth, express.static(path.resolve(__dirname, 'client', 'products')));
app.use('/inventario/admin/:id', express.static(path.resolve(__dirname, 'client', 'inventario')));
app.use('/inventario//:id', express.static(path.resolve(__dirname, 'client', 'inventario')));

app.listen(4000, () => {
    console.log('Servidor arrancando en el puerto 4000');
})