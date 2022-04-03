import {
  Button,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import React from "react";
import { auth, db } from "../../../config/firebase";

const Ready = ({ route, navigation }) => {
  const [loaded, error] = useFonts({
    PoppinsSemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          source={require("../../../../assets/ready-to-go.png")}
          style={styles.image}
        />
        <Text style={styles.textOne}>You are ready to go!</Text>
        <Text style={styles.textTwo}>
          Congratulations, you are ready to view all our recommendations
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("Housing")}>
          <View style={styles.nextButtonView}>
            <Text style={styles.nextButtonText}>Finish</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Ready;

//🇦🇺 🇦🇺
