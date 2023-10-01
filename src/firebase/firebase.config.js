
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_Ckt88H8HZUXg7YBsaCtcYj_cRN5p-K4",
  authDomain: "auth-moha-milon-c2fd0.firebaseapp.com",
  projectId: "auth-moha-milon-c2fd0",
  storageBucket: "auth-moha-milon-c2fd0.appspot.com",
  messagingSenderId: "97526110972",
  appId: "1:97526110972:web:866350dae2f7abbfcd5579"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;