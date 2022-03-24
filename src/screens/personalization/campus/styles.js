import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { WHITE, BACKGROUND } from "../../../styles/colors";

let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height; //full height
console.log(width, height);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  textOne: {
    color: WHITE,
    fontFamily: "PoppinsSemiBold",
    paddingBottom: 20,
    fontSize: 20,
  },
  textTwo: {
    color: WHITE,
    fontFamily: "PoppinsRegular",
    paddingBottom: 50,
  },
  textInput: {
    color: WHITE,

    fontFamily: "PoppinsMedium",
    backgroundColor: "#1C1C4D",
    borderRadius: 20,
    width: wp("70%"),
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonWrapper: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  buttonViewStyle: {
    borderRadius: 20,
    paddingVertical: 3,
    paddingHorizontal: 3,
    borderWidth: 2,
  },
  textStyle: {
    color: WHITE,
    fontFamily: "PoppinsMedium",
  },
});

export default styles;
