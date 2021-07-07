import firebase from 'firebase';
require('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCDkM75aY4obybVVnG_959j3uY8NV1yU0Q",
    authDomain: "myapplication-3966a.firebaseapp.com",
    projectId: "myapplication-3966a",
    storageBucket: "myapplication-3966a.appspot.com",
    messagingSenderId: "979005636202",
    appId: "1:979005636202:web:f782d34ca460295ad7d413"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();