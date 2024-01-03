const express = require('express');
const routerApp = require('./router/index.js');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Ready!!!!!!!!!!!!!!!');
})

routerApp(app);

app.listen(3100, () => {
    console.log('Servidor arrancando');
})






// {}