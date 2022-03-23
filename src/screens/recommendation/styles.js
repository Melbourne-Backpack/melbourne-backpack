import { StyleSheet } from "react-native";
import { BACKGROUND, WHITE } from "../../styles/colors";
import { FONT_WEIGHT_SEMI_BOLD } from "../../styles/typography";
import { scaleSize } from "../../styles/scale";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  wrapper: {
    flex: 1,
    padding: scaleSize(10),
  },
  heading1: {
    fontSize: 20,
    fontWeight: FONT_WEIGHT_SEMI_BOLD,
    color: WHITE,
    marginVertical: scaleSize(12),
  },
  secondHeader: {
    flexDirection: "row",
    marginVertical: scaleSize(22),
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  heading2: {
    color: WHITE,
    fontSize: 16,
  },
});

export default styles;
