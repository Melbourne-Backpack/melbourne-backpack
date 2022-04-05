import { StyleSheet } from "react-native";
import { PLACEHOLDER, TEXT_INPUT, WHITE } from "../../styles/colors";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: TEXT_INPUT,
    width: wp("80%"),
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  option: {
    color: WHITE,
  },
});

export default styles;
