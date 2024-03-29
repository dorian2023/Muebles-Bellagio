const auth = require('../../firebase/firebase.auth.js');

async function getTokenUser(idTokenUser) {
  return await auth.verifyIdToken(idTokenUser);
}

module.exports = {
  getToken: getTokenUser
}