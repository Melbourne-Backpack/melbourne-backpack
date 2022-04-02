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

const EmailSent = ({ route, navigation }) => {
  const { email } = route.params;
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
            <Text style={styles.textOne}>Email Sent</Text>
            <View style={styles.textGroup}>
              <Text style={styles.textTwo}>We sent an email to {""}</Text>
              <Text style={styles.textEmail}>
                {JSON.stringify(email).slice(1, -1)} {""}
              </Text>
              <Text style={styles.textTwo}>with {""}</Text>
              <Text style={styles.textTwo}>a {""}</Text>
              <Text style={styles.textTwo}>link {""}</Text>
              <Text style={styles.textTwo}>to {""}</Text>
              <Text style={styles.textTwo}>get back into your account.</Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignIn");
              }}
            >
              <View style={styles.loginButtonView}>
                <Text style={styles.loginButtonText}>Continue</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default EmailSent;

//🇦🇺 🇦🇺
