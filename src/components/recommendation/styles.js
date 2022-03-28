import { StyleSheet } from "react-native";
import { DARK_BLUE_PURPLE, GREY, WHITE, YELLOW } from "../../styles/colors";
import { scaleSize } from "../../styles/scale";
import {
  FONT_WEIGHT_EXTRA_BOLD,
  FONT_WEIGHT_MEDIUM,
} from "../../styles/typography";

const styles = StyleSheet.create({
  card: {
    backgroundColor: DARK_BLUE_PURPLE,
    borderRadius: 20,
    marginBottom: scaleSize(30),
  },
  backgroundImg: {
    width: "100%",
    height: scaleSize(300),
  },
  overlay: {
    height: "100%",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0, 0.32)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    paddingBottom: 15,
  },
  text: {
    color: WHITE,
    marginTop: scaleSize(5),
    marginBottom: 10,
  },
  name: {
    fontWeight: FONT_WEIGHT_MEDIUM,
    fontSize: 16,
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
  extraOuterContainer: {
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
