const express = require('express');
const routerApp = require('./router/index.js');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Ready!!!!!!!!!!!!!!!');
})

routerApp(app);

app.listen(3100, () => {
    console.log('Servidor arrancando');
})


module.exports = app;



// {}