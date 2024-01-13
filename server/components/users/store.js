const {
    auth,
    db,
} = require('./model');


function addUser(userData) {
    return auth.createUser(userData);
}

async function saveUserInFirestore(userData) {
    const docRef = db.collection('users')
    return await docRef.add(userData);
}


function getUsers(email) {
    if (email) {
        return auth.getUserByEmail(email);
    }

    return auth.listUsers(100);
}

module.exports = {
    add: addUser,
    save: saveUserInFirestore,
    list: getUsers,
}

// {}