import { auth, db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

const signUp = ({ navigation }, email, password, cfPassword) => {
  if (password !== cfPassword) {
    window.alert("Password and confirm password does not match");
  } else {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Create user: ", email);
        window.alert("Sign up successful!");
        navigation.replace("Welcome");
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

const signOut = ({ navigation }) => {
  auth
    .signOut()
    .then(() => {
      navigation.replace("SignIn");
    })
    .catch((error) => window.alert(error.message));
};

const emailVerification = ({ navigation }, email) => {
  auth
    .sendPasswordResetEmail(email)
    .then(() => {
      console.log("Password reset email sent!");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export { signUp, signOut, emailVerification };
