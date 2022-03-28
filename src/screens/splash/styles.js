import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height; //full height

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "space-around",
  },
  icon: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  textTitle: {
    color: "#ffffff",
    fontSize: 50,
    fontWeight: "800",
    marginTop: -100,
  },
  versionText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "400",
  },
});

export default styles;
