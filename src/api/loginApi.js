import { auth, db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

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

export { signOut, emailVerification };
