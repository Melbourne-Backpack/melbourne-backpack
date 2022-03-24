import {
  Button,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  SelectMultipleButton,
  SelectMultipleGroupButton,
} from "react-native-selectmultiple-button";

const Campus = ({ navigation }) => {
  const [text, setText] = React.useState("");
  const [loaded, error] = useFonts({
    PoppinsSemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../../../../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.textOne}>Tell us more about yourself</Text>
          <Text style={styles.textTwo}>Choose your current campus</Text>
          <TextInput
            style={styles.textInput}
            placeholder={"Campus in Vietnam"}
            placeholderTextColor={"#6A6A8B"}
          />
          <View></View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Campus;
