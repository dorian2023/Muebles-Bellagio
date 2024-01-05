const express = require('express');
const routerApp = require('./router/index.js');
const app = express();
const cors = require('cors');

// app.use(express.urlencoded({ extended: true }))

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Ready!!!!!!!!!!!!!!!');
})

routerApp(app);

// app.use(express.static(patch.join(__dirname, 'public')));

app.listen(3100, () => {
    console.log('Servidor arrancando');
})


module.exports = app;



// {}