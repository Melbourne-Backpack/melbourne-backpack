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
import { auth, db } from "../../config/firebase";
import { emailVerification, signIn } from "../../api/loginApi";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
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
            <Text style={styles.textOne}>Forget Password</Text>
            <Text style={styles.textTwo}>
              Please fill email or phone number and we'll send you a link to get
              back into your account.
            </Text>
            <TextInput
              style={styles.textInput}
              keyboardType={"email-address"}
              placeholder={"Email"}
              placeholderTextColor={WHITE}
              onChangeText={(text) => setEmail(text)}
              defaultValue={email}
            />
            <TouchableOpacity
              onPress={() => {
                emailVerification({ navigation }, email);
                navigation.navigate("EmailSent", { email: email });
              }}
            >
              <View style={styles.loginButtonView}>
                <Text style={styles.loginButtonText}>Submit</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.cancelButtonView}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPassword;

//🇦🇺 🇦🇺
