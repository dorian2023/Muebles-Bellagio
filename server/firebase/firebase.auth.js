const {
  getAuth
} = require('firebase-admin/auth');
const app = require('./firebase.config.js');

const auth = getAuth(app);

module.exports = auth;