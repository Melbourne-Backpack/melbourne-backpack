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
import React, { useState } from "react";
import {
  LIGHT_PURPLE,
  PLACEHOLDER,
  SELECTED_BUTTON,
  WHITE,
} from "../../styles/colors";
import CheckBox from "react-native-check-box";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loaded, error] = useFonts({
    PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          source={require("../../../assets/adaptive-icon.png")}
          style={styles.icon}
        />
        <View style={styles.loginField}>
          <Text style={styles.textOne}>Login to your account</Text>
          <TextInput
            style={styles.textInput}
            placeholder={"Email"}
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
          />
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
          <TouchableOpacity>
            <View style={styles.loginButtonView}>
              <Text style={styles.loginButtonText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

//🇦🇺 🇦🇺
