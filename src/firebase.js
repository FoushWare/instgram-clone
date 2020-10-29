import firebase from 'firebase';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyBUFVP9gNqrGsv2OoVBiRvNi8G1-xqhr7E",
        authDomain: "instagram-clone-7282a.firebaseapp.com",
        databaseURL: "https://instagram-clone-7282a.firebaseio.com",
        projectId: "instagram-clone-7282a",
        storageBucket: "instagram-clone-7282a.appspot.com",
        messagingSenderId: "384387917403",
        appId: "1:384387917403:web:8eef9d265e9cfca89ac17e",
        measurementId: "G-EQTNYN1N3Z"
    }
    ) ;
    firebase.firestore().settings({ experimentalForceLongPolling: true });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage= firebase.storage();

  export {db,auth,storage};



