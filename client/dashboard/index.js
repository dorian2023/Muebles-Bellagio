// aca es donde debería ir la lógica de cuando se cierre sesión

import {getAuth, signOut } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js'

// https://firebase.google.com/docs/auth/web/password-auth?hl=es-419

const cerrar = document.querySelector('.cerrar');


const auth = getAuth();

cerrar.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      window.location.pathname= '/'
  }).catch((error) => {
      console.log(error)
  });
})
