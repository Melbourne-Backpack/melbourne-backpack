import {
  Button,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import {
  WHITE,
  DARK_BLUE,
  LIGHT_BLUE,
  SELECTED_BUTTON,
  TEXT_INPUT,
} from "../../../styles/colors";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import { SelectMultipleButton } from "react-native-selectmultiple-button";
import _ from "lodash";

const Campus = ({ navigation }) => {
  // handle Selected button
  const [selectedData, setSelectedData] = React.useState([]);
  const [selected, setSelected] = React.useState(false);

  // handle Text Input value
  const [text, setText] = useState("");
  // handle font
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
            onChangeText={(newText) => setText(newText)}
            defaultValue={text}
          >
            {selected ? _.join(selectedData, "") : ""}
          </TextInput>
          <View style={styles.buttonWrapper}>
            {multipleData.map((campus) => (
              <SelectMultipleButton
                key={campus}
                buttonViewStyle={styles.buttonViewStyle}
                textStyle={styles.textStyle}
                highLightStyle={{
                  borderColor: WHITE,
                  backgroundColor: "transparent",
                  textColor: WHITE,
                  borderTintColor: DARK_BLUE,
                  backgroundTintColor: SELECTED_BUTTON,
                  textTintColor: WHITE,
                }}
                value={campus}
                selected={selectedData.includes(campus)}
                singleTap={(valueTap) => {
                  setSelectedData(campus);
                  setSelected(true);
                }}
              />
            ))}
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Subject")}>
            <View style={styles.nextButtonView}>
              <Text style={styles.nextButtonText}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Campus;