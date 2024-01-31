import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js'
import {
  app
} from '../firebase/firebase.config.client.js';

import {
  loginUser
} from './apiFetch.js';

const signIn = document.getElementById('signIn');

const auth = getAuth(app);

signIn.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = event.target.email.value;
  const password = event.target.password.value;

  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const token = userCredentials._tokenResponse.idToken;
          loginUser(token)
            .then(() => {
              const user = userCredentials.user;
              console.log(user);
              const objectRole = JSON.parse(user.reloadUserInfo.customAttributes)
              console.log(objectRole);

              if (objectRole.role === "admin") {
                window.location.pathname = `/dashboard/${user.uid}`;
              } else if (objectRole.role === "trabajador") {
                window.location.pathname = `/dashboard/trabajador/${user.uid}`;
              }
            })

        })
    })
    .catch((error) => console.log(error));
})