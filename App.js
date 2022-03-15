import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import { Dimensions } from "react-native";

let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height; //full height

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/melbourne-bg.jpg")}
        style={styles.backgroundImage}
      >
        <Text style={styles.text}>Welcome to Melbourne Backpack 🎉 🎉</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
  },
});
