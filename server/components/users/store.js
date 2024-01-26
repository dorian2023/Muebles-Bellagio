const {
    auth,
} = require('./model');



function addUser(userData) {
    return auth.createUser(userData);
}

// permisos

async function addPermissions(uid, objectRole){
    return await auth.setCustomUserClaims(uid, objectRole)
};

async function customToken(uid){
    return await auth.createCustomToken(uid);
}


function getUsers(email) {

    if (email) {
        return auth.getUserByEmail(email);
    }

    return auth.listUsers(100);
}

module.exports = {
    add: addUser,
    role: addPermissions,
    customToken,
    list: getUsers,
}