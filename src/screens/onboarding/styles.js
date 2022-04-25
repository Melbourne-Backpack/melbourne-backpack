import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { WHITE, BACKGROUND, PURPLE_BLUE } from "../../styles/colors";
import { useFonts } from "expo-font";

let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height; //full height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    color: WHITE,
    fontFamily: "PoppinsRegular",
    marginTop: 10,
    maxWidth: "70%",
    textAlign: "center",
    lineHeight: 23,
  },
  title: {
    color: WHITE,
    fontFamily: "PoppinsExtraBold",
    fontSize: 30,
    marginTop: 20,
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 20,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 20,
    backgroundColor: PURPLE_BLUE,
    justifyContent: "center",
    alignItems: "center",
  },
  flatList: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
