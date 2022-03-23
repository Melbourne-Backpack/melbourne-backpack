import { StyleSheet } from "react-native";
import { DARK_BLUE_PURPLE, GREY, WHITE, YELLOW } from "../../styles/colors";
import { scaleSize } from "../../styles/scale";
import {
  FONT_WEIGHT_EXTRA_BOLD,
  FONT_WEIGHT_MEDIUM,
} from "../../styles/typography";

const styles = StyleSheet.create({
  card: {
    flex: 0.8,
    backgroundColor: DARK_BLUE_PURPLE,
    borderRadius: 20,
    marginBottom: scaleSize(10),
  },
  imgContainer: {
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
    paddingHorizontal: scaleSize(10),
    paddingVertical: scaleSize(7),
  },
  text: {
    color: WHITE,
    marginTop: scaleSize(5),
  },
  name: {
    fontWeight: FONT_WEIGHT_MEDIUM,
    fontSize: 17,
  },
  price: {
    fontWeight: FONT_WEIGHT_EXTRA_BOLD,
    fontSize: 20,
    marginBottom: scaleSize(5),
  },
  location: {
    fontSize: 12,
    marginBottom: scaleSize(20),
  },
  extraWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  extraContainer: {
    alignItems: "center",
  },
  extra: {
    fontSize: 12,
    color: GREY,
    textAlign: "center",
  },
});

export default styles;
