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

export { signOut };
