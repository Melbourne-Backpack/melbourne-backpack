import { StyleSheet } from "react-native";
import { DARK_BLUE } from "../../../styles/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
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
});

export default styles;
