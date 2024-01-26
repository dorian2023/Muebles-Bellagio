//Es la configuracion de la base de datos


const app = require('../../firebase/firebase.config');
const admin = require('firebase-admin');
const { getFirestore } =  require('firebase-admin/firestore');

const db = getFirestore(admin.apps[app]);

module.exports = db;