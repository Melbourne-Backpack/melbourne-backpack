import { Button, ImageBackground, Text, View } from "react-native";
import styles from "./styles";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/melbourne-bg.jpg")}
        style={styles.backgroundImage}
      >
        <Text style={styles.text}>Welcome to Melbourne Backpack 🎉 🎉</Text>
        <Button title="Details" onPress={() => navigation.navigate("Home")} />
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
