import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { LIGHT_PURPLE, SELECTED_BUTTON, WHITE } from "../../styles/colors";
import CheckBox from "react-native-check-box";
import { auth, db } from "../../config/firebase";
import { signIn } from "../../api/loginApi";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

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
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text style={styles.registerButtonText}>Reset Password</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => signIn({ navigation }, email, password)}
          >
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
