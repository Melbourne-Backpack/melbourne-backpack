import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { LIGHT_PURPLE, SELECTED_BUTTON, WHITE } from "../../styles/colors";
import CheckBox from "react-native-check-box";
import { auth } from "../../config/firebase";

const SignIn = ({ navigation }) => {
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

  const handleSignIn = () => {
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

  const [loaded, error] = useFonts({
    PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../../../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <Image
            source={require("../../../assets/adaptive-icon.png")}
            style={styles.icon}
          />
          <View style={styles.loginField}>
            <Text style={styles.textOne}>Sign in to your account</Text>
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
          </View>
          <View style={styles.midFlex}>
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
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.registerButtonText}>Reset Password</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleSignIn}>
            <View style={styles.loginButtonView}>
              <Text style={styles.loginButtonText}>Login</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.field}>
            <Text style={styles.label}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.registerButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;

//🇦🇺 🇦🇺
