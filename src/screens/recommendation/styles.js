import { StyleSheet } from "react-native";
import { BACKGROUND, WHITE } from "../../styles/colors";
import { FONT_SIZE_16, FONT_WEIGHT_SEMI_BOLD } from "../../styles/typography";
import { scaleSize } from "../../styles/scale";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  heading1: {
    fontSize: FONT_SIZE_16,
    fontWeight: FONT_WEIGHT_SEMI_BOLD,
    padding: scaleSize(10),
    color: WHITE,
  },
});

export default styles;
