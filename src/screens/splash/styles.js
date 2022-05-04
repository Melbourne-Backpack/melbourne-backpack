import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { WHITE } from "../../styles/colors";

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
    width: 180,
    height: 180,
    resizeMode: "contain",
  },
  textTitle: {
    color: WHITE,
    fontSize: 50,
    fontFamily: "PoppinsExtraBold",
    marginTop: -100,
  },
  versionText: {
    color: WHITE,
    fontSize: 20,
    fontFamily: "PoppinsRegular",
  },
});

export default styles;
