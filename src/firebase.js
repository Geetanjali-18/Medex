// Import the functions you need from the SDKs you nee
import { initializeApp  } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-FBFPnz0oChv20NH0B7H1svFMxulThWo",
  authDomain: "bffhackathon.firebaseapp.com",
  projectId: "bffhackathon",
  storageBucket: "bffhackathon.appspot.com",
  messagingSenderId: "48837108422",
  appId: "1:48837108422:web:7f0522c6092f919ec72dc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export const db = getFirestore(app);
export {app , auth};