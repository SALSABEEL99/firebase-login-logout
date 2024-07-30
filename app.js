 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
 import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAcKuabhypoX6Z56K05K4lIADDhO3_GJ64",
   authDomain: "login-logout-project-fda60.firebaseapp.com",
   projectId: "login-logout-project-fda60",
   storageBucket: "login-logout-project-fda60.appspot.com",
   messagingSenderId: "217523785208",
   appId: "1:217523785208:web:d952094cc19dd392ee1a0d"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 

const signup_email = document.getElementById('signup_email');
const signup_password = document.getElementById('signup_password');
const signup_btn = document.getElementById('signup_btn');

const signin_email = document.getElementById('signin_email');
const signin_password = document.getElementById('signin_password');
const signin_btn = document.getElementById('signin_btn');



signup_btn.addEventListener('click', createUserAccount);
signin_btn.addEventListener('click',signIn)



 onAuthStateChanged(auth, (user) => {
    if (user) {
        //console.log('user login');
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
        //console.log('user not login');
      // User is signed out
      // ...
    }
  });

  function createUserAccount () {
    event.preventDefault
    createUserWithEmailAndPassword(
      auth, 
      signup_email.value, 
      signup_password.value
    )
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log('user=>',user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
  }
  
  function signIn() {
    console.log(signin_email.value );
      console.log(signin_password.value);
   
    
  }
  

  
