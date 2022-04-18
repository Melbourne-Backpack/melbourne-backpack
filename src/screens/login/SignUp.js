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
import { signUp } from "../../api/loginApi";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");

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
      <KeyboardAvoidingView
        keyboardVerticalOffset={20}
        behavior="padding"
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.wrapper}>
            <Image
              source={require("../../../assets/adaptive-icon.png")}
              style={styles.icon}
            />
            <View style={styles.loginField}>
              <Text style={styles.textOne}>Sign up your account</Text>
              <View style={styles.textInput}>
                <TextInput
                  style={styles.text}
                  placeholder={"Email"}
                  keyboardType={"email-address"}
                  placeholderTextColor={WHITE}
                  onChangeText={(text) => setEmail(text)}
                  defaultValue={email}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/email-icon.png")}
                />
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={styles.text}
                  placeholder={"Password"}
                  placeholderTextColor={WHITE}
                  onChangeText={(text) => setPassword(text)}
                  defaultValue={password}
                  secureTextEntry={true}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/password-icon.png")}
                />
              </View>
              <View style={styles.textInput}>
                <TextInput
                  style={styles.text}
                  placeholder={"Confirm Password"}
                  placeholderTextColor={WHITE}
                  onChangeText={(text) => setCfPassword(text)}
                  defaultValue={cfPassword}
                  secureTextEntry={true}
                />
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../../assets/password-icon.png")}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  signUp({ navigation }, email, password, cfPassword);
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
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;

//🇦🇺 🇦🇺
