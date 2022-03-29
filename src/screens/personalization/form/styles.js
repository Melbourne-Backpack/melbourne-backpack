import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  WHITE,
  BACKGROUND,
  SELECTED_BUTTON,
  TEXT_INPUT,
  YELLOW,
} from "../../../styles/colors";

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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: wp("80%"),
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarText: {
    color: WHITE,
    fontFamily: "PoppinsSemiBold",
    paddingTop: 10,
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
    marginVertical: 10,
  },
  introduction: {
    paddingBottom: 100,
  },
  textController: {
    width: wp("80%"),
    flexDirection: "row",
    flexWrap: "wrap",
  },
  normalText: {
    fontFamily: "PoppinsRegular",
    color: WHITE,
  },
  yellowText: {
    fontFamily: "PoppinsRegular",
    color: YELLOW,
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
    borderWidth: 1,
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
