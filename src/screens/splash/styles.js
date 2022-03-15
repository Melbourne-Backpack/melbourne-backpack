import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height; //full height

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

export default styles;
