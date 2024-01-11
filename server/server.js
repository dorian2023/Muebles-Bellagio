const express = require('express');
const routerApp = require('./router/index.js');
const cors = require('cors');
const path = require('path');

const app = express();
// app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname,'client')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
})

routerApp(app);

// app.use(express.static(patch.join(__dirname, 'public')));

app.listen(3100, () => {
    console.log('Servidor arrancando');
})
module.exports = app;




// {}