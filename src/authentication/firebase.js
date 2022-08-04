// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzInWW0X-8SsOUcTiO8e1CFYj2JRzAcAo",
  authDomain: "finalproject-recipe.firebaseapp.com",
  projectId: "finalproject-recipe",
  storageBucket: "finalproject-recipe.appspot.com",
  messagingSenderId: "736085279043",
  appId: "1:736085279043:web:683db07bb272283d482ff6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const registerDenganEmailDanPassword = async (email, password) => {
  try {
    const userYangDidapatkan = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(
      "User yang teregis dan berhasil login adalah",
      userYangDidapatkan.user
    );
  } catch (err) {
    console.log(err);
    console.log("Error code auth: ", err.code);
    console.log("Error msg auth: ", err.message);
  }
};

const loginDenganEmailDanPassword = async (email, password) => {
  try {
    const userYangLogin = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("User yang berhasil login adalah", userYangLogin.user);
  } catch (err) {
    console.log("Error code auth: ", err.code);
    console.log("Error msg auth: ", err.message);
  }
};

const keluarDariAplikasi = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

export {
  auth,
  registerDenganEmailDanPassword,
  loginDenganEmailDanPassword,
  keluarDariAplikasi,
};
