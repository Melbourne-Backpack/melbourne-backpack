import { StyleSheet } from "react-native";
import { DARK_BLUE_PURPLE, WHITE } from "../../styles/colors";
import { scaleSize } from "../../styles/scale";

const styles = StyleSheet.create({
  card: {
    flex: 0.5,
    backgroundColor: DARK_BLUE_PURPLE,
    margin: scaleSize(10),
  },
  container: {
    flex: 1,
    position: "relative",
  },
  backgroundImg: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  text: {
    color: WHITE,
  },
});

export default styles;
