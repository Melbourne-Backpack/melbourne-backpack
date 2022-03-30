import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { WHITE } from "../../styles/colors";
import { auth } from "../../config/firebase";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Welcome");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
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
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.wrapper}>
            <Image
              source={require("../../../assets/adaptive-icon.png")}
              style={styles.icon}
            />
            <View style={styles.loginField}>
              <Text style={styles.textOne}>Sign up your account</Text>
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
              <TextInput
                style={styles.textInput}
                placeholder={"Confirm Password"}
                placeholderTextColor={WHITE}
                onChangeText={(text) => setCfPassword(text)}
                defaultValue={cfPassword}
                secureTextEntry={true}
              />
              <TouchableOpacity onPress={handleSignUp}>
                <View style={styles.loginButtonView}>
                  <Text style={styles.loginButtonText}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.field}>
              <Text style={styles.label}>Already got an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                <Text style={styles.registerButtonText}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;

//🇦🇺 🇦🇺
