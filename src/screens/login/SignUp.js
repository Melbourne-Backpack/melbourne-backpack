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
import { signUp } from "../../api/loginApi";

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
                keyboardType={"email-address"}
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
              <TouchableOpacity
                onPress={() => {
                  signUp(email, password, cfPassword);
                }}
              >
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
