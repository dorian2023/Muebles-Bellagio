const { UserRecord } = require('firebase-admin/auth');
const store = require('./store');

/*const { compare } = require('bcrypt'); // Necesitarás bcrypt para comparar contraseñas

function login(credentials) {
    return new Promise(async (resolve, reject) => {
        try {
            const { email, password } = credentials;

            // Obtener el usuario por correo electrónico desde tu sistema de almacenamiento (Firebase)
            const user = await store.getUsers(email);

            if (!user) {
                // El usuario no existe
                reject({ success: false, message: 'Credenciales incorrectas' });
                return;
            }

            // Comparar la contraseña proporcionada con la contraseña almacenada
            const passwordMatch = await compare(password, user.password);

            if (passwordMatch) {
                // Contraseña válida, inicio de sesión exitoso
                resolve({ success: true, message: 'Inicio de sesión exitoso' });
            } else {
                // Contraseña incorrecta
                reject({ success: false, message: 'Credenciales incorrectas' });
            }
        } catch (error) {
            // Manejar errores, por ejemplo, problemas con la base de datos
            console.error('Error en la autenticación:', error);
            reject({ success: false, message: 'Error interno del servidor' });
        }
    });
}*/

function addUser(userData) {
    return new Promise((resolve, reject) => {
        if (Object.entries(userData).length === 0) {
            console.log("[UsersController]: User does not have content, the use is empty");
            reject('There is no data user');
        }
        store.add(userData)
            .then((UserRecord) => console.log('new user ' + UserRecord.uid))
            .catch((error) => console.log("[UsersController]: Error al crear nuevo Usuario: " + error));
            resolve(userData);
    });
}

//Save in Firestore 
function saveUser(user) {
    return new Promise((resolve, reject) => {
        if (Object.entries(user).length === 0) {
            console.log("[UserController]: User does not have content, the User is empty : [ProductsController]: El producto no tiene contenido, el producto está vacío")
            reject('There is no user : No hay usuario');
        }
        store.save(user);
        resolve(user);
    });
};

function getUsers(emailUser) {
    return new Promise((resolve, reject) => {
        resolve(
            store.list(emailUser)
            .then((getUsersResult) => {
                return getUsersResult.users;
            })
            .catch(error => console.log(error))
        );
    })
}

module.exports = {
    addUser,
    getUsers,
    saveUser

}

// {}||   [] <>