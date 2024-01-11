const { UserRecord } = require('firebase-admin/auth');
const store = require('./store');

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
};

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