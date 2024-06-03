import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAvRZNLDhPqndj8FWOd522aKp6-QAeXsFw",
  authDomain: "shopee-fec34.firebaseapp.com",
  projectId: "shopee-fec34",
  storageBucket: "shopee-fec34.appspot.com",
  messagingSenderId: "400613764384",
  appId: "1:400613764384:web:6ab381e24e379094bc3b45",
  measurementId: "G-L6N3D5R55J"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
