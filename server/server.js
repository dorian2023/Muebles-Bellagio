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




/* app.post('/login', async (req, res) => {
    // Lógica de autenticación aquí (usa tu función login del controlador)
    // Devuelve una respuesta JSON con el resultado
    try {
        const credentials = {
            email: req.body.email, // Asegúrate de que el nombre del campo coincida con tu formulario
            password: req.body.password, // Asegúrate de que el nombre del campo coincida con tu formulario
        };

        // Lógica de autenticación utilizando la función login del controlador
        const result = await controller.login(credentials);

        // Verificar el resultado del inicio de sesión
        if (result.success) {
            // Inicio de sesión exitoso
            res.json({ success: true, message: 'Inicio de sesión exitoso' });
        } else {
            // Credenciales incorrectas u otro error
            res.json({ success: false, message: 'Credenciales incorrectas' });
        }
    } catch (error) {
        // Manejo de errores
        console.error('Error en el inicio de sesión:', error);
        res.status(500).json({ success: false, message: 'Error interno del servidor' });
    } 
});*/


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
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