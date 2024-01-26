const express = require('express');
const cors = require('cors');
const path = require('path');
const routerApp = require('./server/router/index.js');
//const admin = require('./firebase/firebase.config.js');

const app = express();
app.use(cors());
app.use(express.json());

routerApp(app);

// Esto te muestra las rutas de tu proyecto
console.log(path.resolve(__dirname, 'client'));

// rutas visuales (HTML, CSS, img, JAVASCRIPT)
app.use(express.static(path.resolve(__dirname, 'client')));
app.use('/',  express.static(path.resolve(__dirname, 'client', 'login')));
app.use('/register', express.static(path.resolve(__dirname, 'client', 'register')));
app.use('/dashboard', express.static(path.resolve(__dirname, 'client', 'img')), express.static(path.resolve(__dirname, 'client', 'dashboard')));
app.use('/products', express.static(path.resolve(__dirname, 'client', 'products')));

app.listen(4000, ()=> {
    console.log('Servidor arrancando en el puerto 4000');
})