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
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");

  const [data, setData] = useState({
    email: "",
    password: "",
    cfPassword: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.trim().regexp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
      });
    } else {
      setData({
        ...data,
        password: val,
      });
    }
  };

  const handleCfPasswordChange = (val) => {
    if (val.trim() === password) {
      setData({
        ...data,
        cfPassword: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        cfPassword: val,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
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
              <TextInput
                style={styles.textInput}
                placeholder={"Email"}
                keyboardType={"email-address"}
                placeholderTextColor={WHITE}
                defaultValue={email}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
              />
              {data.check_textInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
            </View>

            <TextInput
              style={styles.textInput}
              placeholder={"Password"}
              placeholderTextColor={WHITE}
              onChangeText={(text) => handlePasswordChange(text)}
              defaultValue={password}
              secureTextEntry={true}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.textInput}
            placeholder={"Confirm Password"}
            placeholderTextColor={WHITE}
            onChangeText={(text) => handleCfPasswordChange(text)}
            defaultValue={cfPassword}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              signUp({ navigation }, email, password, cfPassword);
            }}
          >
            <View style={styles.loginButtonView}>
              <Text style={styles.loginButtonText}>Sign Up</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.field}>
            <Text style={styles.label}>Already got an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text style={styles.registerButtonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;
