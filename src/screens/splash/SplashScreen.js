import {
  Button,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("Welcome");
  }, 3000);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/splash.png")}
        style={styles.backgroundImage}
      >
        <Text style={styles.textTitle}>
          Melbourne {"\n"} Backpack {"\n"}
        </Text>
        <Text style={styles.versionText}>Version 1.0</Text>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

//🇦🇺 🇦🇺
