import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPeH9iX7g8OPVLzIUOTJaIi63ImRdoO6I",
  authDomain: "fir-56aea.firebaseapp.com",
  projectId: "fir-56aea",
  storageBucket: "fir-56aea.appspot.com",
  messagingSenderId: "598540922522",
  appId: "1:598540922522:web:ede585ae77ddb38f7f3923",
  measurementId: "G-LJL2KSNV76",
};

export default firebase.initializeApp(firebaseConfig);
