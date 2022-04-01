import { auth, db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const signIn = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log("SignIn success");
    })
    .catch((error) => {
      if (error.code === "auth/invalid-email") {
        alert("That email address is invalid!");
      }
      if (error.code === "auth/wrong-password") {
        alert("Wrong password!");
      }
      if (error.code === "auth/user-not-found") {
        alert("User not found!");
      }
    });
};

const signUp = (email, password, cfPassword) => {
  if (password !== cfPassword) {
    window.alert("Password and confirm password does not match");
  } else {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(email);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          window.alert("That email address is already in use!");
        }
        if (error.code === "auth/invalid-email") {
          window.alert("That email address is invalid!");
        }
      });
  }
};

export { signIn, signUp };
