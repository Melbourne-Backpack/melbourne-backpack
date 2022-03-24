import {
  Button,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import styles from "./styles";
import { WHITE, DARK_BLUE, LIGHT_BLUE } from "../../../styles/colors";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import { SelectMultipleButton } from "react-native-selectmultiple-button";

const Campus = ({ navigation }) => {
  const [multipleSelectedData, setMultipleSelectedData] = React.useState([]);
  const [multipleSelectedDataLimited, setMultipleSelectedDataLimited] =
    React.useState("");
  const [loaded, error] = useFonts({
    PoppinsSemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../../../../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  const multipleData = ["Hanoi", "Da Nang", "Sai Gon"];

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
          <View style={styles.buttonWrapper}>
            {multipleData.map((interest) => (
              <SelectMultipleButton
                key={interest}
                buttonViewStyle={styles.buttonViewStyle}
                textStyle={styles.textStyle}
                highLightStyle={{
                  borderColor: WHITE,
                  backgroundColor: "transparent",
                  textColor: WHITE,
                  borderTintColor: DARK_BLUE,
                  backgroundTintColor: "#4838D1",
                  textTintColor: WHITE,
                }}
                value={interest}
                selected={multipleSelectedData.includes(interest)}
                singleTap={(valueTap) => setMultipleSelectedData(interest)}
              />
            ))}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Campus;
