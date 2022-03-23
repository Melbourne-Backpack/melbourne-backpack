import { StyleSheet } from "react-native";
import { DARK_BLUE_PURPLE, WHITE, YELLOW } from "../../styles/colors";
import { scaleFont, scaleSize } from "../../styles/scale";
import {
  FONT_WEIGHT_EXTRA_BOLD,
  FONT_WEIGHT_MEDIUM,
} from "../../styles/typography";

const styles = StyleSheet.create({
  card: {
    flex: 0.7,
    backgroundColor: DARK_BLUE_PURPLE,
    margin: scaleSize(10),
  },
  imgContainer: {
    flex: 0.9,
    position: "relative",
  },
  backgroundImg: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0, 0.40)",
  },
  rating: {
    color: YELLOW,
    fontSize: 20,
    margin: scaleSize(10),
    fontWeight: FONT_WEIGHT_MEDIUM,
  },
  info: {
    padding: scaleSize(10),
  },
  text: {
    color: WHITE,
    marginTop: scaleSize(5),
  },
  name: {
    fontWeight: FONT_WEIGHT_MEDIUM,
    fontSize: scaleFont(14),
  },
  price: {
    fontWeight: FONT_WEIGHT_EXTRA_BOLD,
    fontSize: scaleFont(16),
    marginBottom: scaleSize(2),
  },
});

export default styles;
