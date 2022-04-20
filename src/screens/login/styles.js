import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import {
  WHITE,
  BACKGROUND,
  SELECTED_BUTTON,
  TEXT_INPUT,
  LIGHT_PURPLE,
  LIGHT_BLUE,
  BLACK,
  PURPLE_BLUE,
  GREY,
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
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
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
    paddingTop: 15,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: {
    width: wp("60%"),
    color: WHITE,
    fontFamily: "PoppinsMedium",
    paddingVertical: 2,
  },
  midFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("80%"),
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
    marginTop: 10,
  },
  loginButtonText: {
    color: WHITE,
    fontFamily: "PoppinsMedium",
    textAlign: "center",
    paddingVertical: 15,
  },
  registerButtonView: {
    borderRadius: 15,
    borderColor: WHITE,
    borderWidth: 1,
    width: wp("80%"),
    marginTop: 15,
  },
  registerButtonText: {
    color: LIGHT_PURPLE,
    fontFamily: "PoppinsMedium",
    textAlign: "center",
    paddingVertical: 15,
  },
  field: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    color: WHITE,
    fontFamily: "PoppinsRegular",
    marginRight: 5,
  },

  textTwo: {
    color: WHITE,
    fontFamily: "PoppinsRegular",
    marginBottom: 10,
  },

  textGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  textEmail: {
    color: WHITE,
    fontFamily: "PoppinsSemiBold",
  },

  cancelButtonView: {
    borderRadius: 15,
    width: wp("80%"),
    marginTop: 10,
    borderWidth: 1,
    borderColor: WHITE,
  },
  cancelButtonText: {
    color: WHITE,
    fontFamily: "PoppinsMedium",
    textAlign: "center",
    paddingVertical: 15,
  },
  alertContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  alertModal: {
    backgroundColor: "#9991D0",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: wp("80%"),
  },
  errorMessage: {
    textAlign: "center",
    color: BLACK,
    fontFamily: "PoppinsMedium",
    fontSize: 15,
    paddingVertical: 10,
  },
  closeButton: {
    width: wp("80%"),
    backgroundColor: "#BBB1FA",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  closeButtonText: {
    color: BLACK,
    fontFamily: "PoppinsSemiBold",
    fontSize: 15,
    textAlign: "center",
    paddingVertical: 10,
  },
});

export default styles;
