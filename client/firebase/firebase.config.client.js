import {
  initializeApp
}
from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsfYNiaY3ttExmHMTLFx3mB3-z4va5kds",
  authDomain: "nuevo-proyecto-6e048.firebaseapp.com",
  projectId: "nuevo-proyecto-6e048",
  storageBucket: "nuevo-proyecto-6e048.appspot.com",
  messagingSenderId: "482302110262",
  appId: "1:482302110262:web:00152d232cdea97f9f0697"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {
  app
}