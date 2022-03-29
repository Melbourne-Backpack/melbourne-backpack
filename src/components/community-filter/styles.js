import { StyleSheet } from "react-native";
import { DARK_BLUE, SELECTED_BUTTON, WHITE } from "../../styles/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  optionBtn: {
    borderColor: WHITE,
    borderRadius: 20,
    color: WHITE,
    paddingVertical: 1,
    paddingHorizontal: 4,
    borderWidth: 1,
    margin: 7,
    height: 30,
  },
  optionText: {
    margin: 5,
    color: WHITE,
    justifyContent: "center",
    alignItems: "center",
  },

  selectedBtn: {
    backgroundColor: SELECTED_BUTTON,
    borderColor: SELECTED_BUTTON,
  },

  filterBtn: {
    backgroundColor: DARK_BLUE,
    borderRadius: wp("3.5%"),
    height: "auto",
    marginTop: hp("0.5%"),
    width: 44,
    aspectRatio: 1,
  },

  filterBtnWrapper: {
    alignItems: "flex-end",
  },

  filterIcon: {
    margin: 10,
  },

  filterText: {
    color: WHITE,
    fontSize: 16,
  },

  filterWrapper: {
    margin: 2,
  },

  optionWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default styles;
