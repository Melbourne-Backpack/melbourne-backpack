import { StyleSheet } from "react-native";
import { DARK_BLUE, WHITE } from "../../styles/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
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
