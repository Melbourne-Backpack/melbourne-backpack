import { StyleSheet } from "react-native";
import { DARK_BLUE_PURPLE, WHITE } from "../../styles/colors";
import { scaleSize } from "../../styles/scale";

const smallerCardStyles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: DARK_BLUE_PURPLE,
    borderRadius: 20,
    padding: 20,
  },
  img: {
    width: scaleSize(100),
    height: scaleSize(100),
    borderRadius: 20,
  },
  text: {
    color: WHITE,
    fontSize: 14,
  },
});

export default smallerCardStyles;
