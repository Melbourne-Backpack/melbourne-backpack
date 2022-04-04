import { Image, ImageBackground, Text, View } from "react-native";
import styles from "./styles";

// use replace instead of navigate to avoid the back button on Android
const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("SignIn");
  }, 5000);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/melbourne-bg.jpg")}
        style={styles.backgroundImage}
      >
        <Image
          source={require("../../../assets/adaptive-icon.png")}
          style={styles.icon}
        />
        <Text style={styles.textTitle}>
          Melbourne {"\n"} Backpack {"\n"}
        </Text>
        <Text style={styles.versionText}>Version 1.0</Text>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
