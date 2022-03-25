import { StyleSheet } from "react-native";
import { DARK_BLUE_PURPLE, WHITE } from "../../styles/colors";
import { scaleSize } from "../../styles/scale";
import { FONT_WEIGHT_MEDIUM } from "../../styles/typography";

const smallerCardStyles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: DARK_BLUE_PURPLE,
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
  },
  img: {
    width: scaleSize(100),
    height: scaleSize(100),
    borderRadius: 20,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  longTextContainer: {
    flexDirection: "row",
  },
  text: {
    color: WHITE,
    fontSize: 14,
    marginBottom: 10,
  },
  title: {
    flex: 1,
    flexWrap: "wrap",
  },
  price: {
    fontWeight: FONT_WEIGHT_MEDIUM,
    fontSize: 16,
  },
});

export default smallerCardStyles;
