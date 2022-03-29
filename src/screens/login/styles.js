import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import {
  WHITE,
  BACKGROUND,
  SELECTED_BUTTON,
  TEXT_INPUT,
} from "../../styles/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height; //full height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: wp("80%"),
  },
  icon: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },
  loginField: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: wp("80%"),
  },
  textOne: {
    fontFamily: "PoppinsSemiBold",
    color: WHITE,
    fontSize: 15,
    marginVertical: 10,
  },
  textInput: {
    backgroundColor: TEXT_INPUT,
    borderRadius: 20,
    width: wp("80%"),
    paddingVertical: 15,
    paddingHorizontal: 30,
    color: WHITE,
    fontFamily: "PoppinsMedium",
    marginVertical: 10,
  },
  checkBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkBoxIcon: {
    marginVertical: 10,
  },
  checkBoxText: {
    color: WHITE,
    fontFamily: "PoppinsRegular",
    marginHorizontal: 5,
  },
  loginButtonView: {
    backgroundColor: SELECTED_BUTTON,
    borderRadius: 15,
    width: wp("80%"),
    marginTop: 30,
  },
  loginButtonText: {
    color: WHITE,
    fontFamily: "PoppinsMedium",
    textAlign: "center",
    paddingVertical: 15,
  },
});

export default styles;
