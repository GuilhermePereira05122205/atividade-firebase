// Import the functions you need from the SDKs you need
var {initializeApp} = require("firebase/app")
var { getFirestore } = require("firebase/firestore")
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQfUVfgmNKdbZYe1wO1amIt71OkLTvBJA",
  authDomain: "teste-aula-5844d.firebaseapp.com",
  projectId: "teste-aula-5844d",
  storageBucket: "teste-aula-5844d.appspot.com",
  messagingSenderId: "275057621618",
  appId: "1:275057621618:web:f1be6d04eb2d728f73e0eb",
  measurementId: "G-H05RSTFM6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

module.exports = db