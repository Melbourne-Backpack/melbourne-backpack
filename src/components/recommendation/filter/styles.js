import { StyleSheet } from "react-native";
import { DARK_BLUE } from "../../../styles/colors";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  filterBtn: {
    backgroundColor: DARK_BLUE,
    borderRadius: wp("3.5%"),
    height: "auto",
    width: 44,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
