const express = require('express');
const routerApp = require('./router/index.js');
const admin = require('./firebase/firebase.config.js');
const auth = admin.auth();
// const auth = require('firebase-admin/auth');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'client')))


app.get('/', (req, res) => {
    // Construye la ruta absoluta al archivo login.html en la carpeta client/login
    res.sendFile(path.join(__dirname, '..', 'client', 'login', 'login.html'));
});
app.get('/client/register', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'register', 'index.html'));
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Realizar la autenticación utilizando Firebase Auth
        const userCredential = await auth().signInWithEmailAndPassword(email, password);     
        // Si la autenticación es exitosa, puedes devolver un token o algún indicador
        res.status(200).json({ message: 'Inicio de sesión exitoso', token: userCredential.user.getIdToken() });
        res.redirect('/client/products/index.html')
    } catch (error) {
        console.error('Error de autenticación:', error);
        res.status(401).json({ error: 'Error de autenticación' });
    }
});


routerApp(app);

app.listen(3100, () => {
    console.log('Servidor arrancando');
})
module.exports = app;




// {}