//LoginUser
const {
    getAuth,
    signInWithEmailAndPassword 
} = require('firebase-admin/auth');
const app = require ('./../../firebase/firebase.config');

//Save user in FireStore
const admin = require('firebase-admin')
const {
    getFirestore,
    doc, 
    getDoc
} = require('firebase-admin/firestore');
const db = getFirestore(admin.apps[app]);

const auth = getAuth(app);

async function login(credentials) {
    const { email, password } = credentials;

    try {
        // Verificar si el usuario existe en Firebase Authentication
        const userRecord = await signInWithEmailAndPassword(auth, email, password);

        // Si llegamos aquí, la autenticación en Firebase fue exitosa
        // Ahora, verifica si el usuario también existe en Firestore
        const userDocRef = doc(db, 'users', userRecord.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
            // El usuario existe en Firestore, lo consideramos como autenticado
            return { success: true, message: 'Inicio de sesión exitoso' };
        } else {
            // El usuario no existe en Firestore, aunque está autenticado en Firebase
            return { success: false, message: 'Usuario no encontrado en Firestore' };
        }
    } catch (error) {
        // Manejar errores de autenticación (credenciales incorrectas, usuario no existente, etc.)
        return { success: false, message: 'Credenciales incorrectas' };
    }
}



module.exports = {
    auth,
    db,
    login    
};

// {}||   [] <>