import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import {
  WHITE,
  BACKGROUND,
  SELECTED_BUTTON,
  TEXT_INPUT,
} from "../../../styles/colors";

let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height; //full height
console.log(width, height);

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
  },
  wrapper: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: wp("80%"),
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
    backgroundColor: TEXT_INPUT,
    borderRadius: 20,
    width: wp("80%"),
    paddingVertical: 15,
    paddingHorizontal: 30,
    color: WHITE,
    fontFamily: "PoppinsMedium",
  },
  buttonWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 20,
  },
  buttonViewStyle: {
    borderRadius: 20,
    paddingVertical: 1,
    paddingHorizontal: 4,
    borderWidth: 1,
  },
  textStyle: {
    color: WHITE,
    fontFamily: "PoppinsMedium",
  },
  selectedText: {
    fontFamily: "PoppinsRegular",
    color: WHITE,
  },
  nextButtonView: {
    backgroundColor: SELECTED_BUTTON,
    borderRadius: 15,
    width: wp("80%"),
    marginTop: 30,
  },
  nextButtonText: {
    color: WHITE,
    fontFamily: "PoppinsMedium",
    textAlign: "center",
    paddingVertical: 15,
  },
  backButtonView: {
    borderRadius: 15,
    borderColor: WHITE,
    borderWidth: 1.5,
    width: wp("80%"),
    marginTop: 15,
  },
  backButtonText: {
    color: WHITE,
    fontFamily: "PoppinsMedium",
    textAlign: "center",
    paddingVertical: 15,
  },
});

export default styles;
