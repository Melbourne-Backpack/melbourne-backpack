import {
  Button,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import {
  LIGHT_PURPLE,
  PLACEHOLDER,
  SELECTED_BUTTON,
  WHITE,
} from "../../styles/colors";
import CheckBox from "react-native-check-box";
import { auth } from "../../../firebase";
import alert from "react-native-web/dist/exports/Alert";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Welcome");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(email);
      })
      .catch((error) => console.log(error.message));
  };

  const handleSignIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Login success");
      })
      .catch((error) => console.log(error));
  };

  const [loaded, error] = useFonts({
    PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Image
            source={require("../../../assets/adaptive-icon.png")}
            style={styles.icon}
          />
          <View style={styles.loginField}>
            <Text style={styles.textOne}>Login to your account</Text>
            <TextInput
              style={styles.textInput}
              placeholder={"Email"}
              placeholderTextColor={WHITE}
              onChangeText={(text) => setEmail(text)}
              defaultValue={email}
            />
            <TextInput
              style={styles.textInput}
              placeholder={"Password"}
              placeholderTextColor={WHITE}
              onChangeText={(text) => setPassword(text)}
              defaultValue={password}
              secureTextEntry={true}
            />
            <View style={styles.checkBox}>
              <CheckBox
                style={styles.checkBoxIcon}
                onClick={() => {
                  setRememberMe(!rememberMe);
                }}
                isChecked={rememberMe}
                checkBoxColor={LIGHT_PURPLE}
                checkedCheckBoxColor={SELECTED_BUTTON}
              />
              <Text style={styles.checkBoxText}>Remember me</Text>
            </View>
            <TouchableOpacity onPress={handleSignIn}>
              <View style={styles.loginButtonView}>
                <Text style={styles.loginButtonText}>Login</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignUp}>
              <View style={styles.registerButtonView}>
                <Text style={styles.registerButtonText}>Register</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

//🇦🇺 🇦🇺
