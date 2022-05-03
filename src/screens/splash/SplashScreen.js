import { Image, ImageBackground, Text, View } from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";

// use replace instead of navigate to avoid the back button on Android
const SplashScreen = ({ navigation }) => {
  const [loaded, error] = useFonts({
    PoppinsExtraBold: require("../../../assets/fonts/Poppins-ExtraBold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  setTimeout(() => {
    navigation.replace("Onboarding");
  }, 3000);
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
