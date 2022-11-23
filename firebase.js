// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCuj2CcT7LcSQPDwToU_p-SBHj31Mq_2E0",
    authDomain: "atmobile-beta-users.firebaseapp.com",
    projectId: "atmobile-beta-users",
    storageBucket: "atmobile-beta-users.appspot.com",
    messagingSenderId: "1000821050275",
    appId: "1:1000821050275:web:48892241afa88e9bcda816",
    measurementId: "G-QLNLBLCBT8"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app();
}

const auth = firebase.auth()

export { auth };