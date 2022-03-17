import {
  Button,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/melbourne-bg.jpg")}
        style={styles.backgroundImage}
      >
        <Text style={styles.textTitle}>
          Melbourne {"\n"} Backpack {"\n"}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
          <View style={styles.viewButton}>
            <Text style={styles.textButton}>Welcome</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.versionText}>Version 1.0</Text>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

//🇦🇺 🇦🇺
