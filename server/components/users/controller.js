
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
            console.log("[UsersController]: User does not have content, the user is empty");
            reject('There is no data user');
        }

        store.add(userData)
            .then((userRecord) => {
                store.customToken(userRecord.uid)
                    .then((tokenGenerated) =>{
                        console.log(tokenGenerated)
                    })
                store.role(userRecord.uid, {
                    role: 'trabajador'
                })
                .then(userWithRole => console.log(userWithRole))
            })
            .catch((error) => console.log("[UsersController]: Error al crear nuevo Usuario: " + error));
            resolve(userData);
    });
}

function getUsers(emailUser) {
    return new Promise((resolve, reject) => {
        if(emailUser) {
            resolve(
                store.list(emailUser)
                .then((getUsersResult) => {
                    console.log(getUsersResult);
                    const uid = getUsersResult.uid;
                    const userInfo = getUsersResult.providerData[0];
                    const role = getUsersResult.customClaims.role;
    
                    return {
                        uid,
                        userInfo,
                        role
                    }
                })
                .catch(error => console.log(error))
            );
        } else {
            resolve(
                store.list()
                .then((getUserResult) => {
                    return getUserResult.users;
                })
                .catch(err => console.log(err))
            )
        }
    })
}

module.exports = {
    addUser,
    getUsers

}