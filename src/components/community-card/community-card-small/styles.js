import { Dimensions, StyleSheet } from "react-native";
import { WHITE } from "../../../styles/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

let width = Dimensions.get("window").width;
let cardHeight = 87;
let cardWidth = 63;
let containerWidth = (width * 3) / 4;
const responsiveCardMarginLeft = () => {
  let maxCardPerRow = 4;
  let totalCardSpace = cardWidth * maxCardPerRow;
  while (containerWidth < totalCardSpace) {
    totalCardSpace -= cardWidth;
    maxCardPerRow -= 1;
  }
  return (containerWidth - totalCardSpace) / maxCardPerRow - 1;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    height: cardHeight,
    marginLeft: responsiveCardMarginLeft(),
    marginBottom: hp("2.2%"),
    overflow: "hidden",
    width: cardWidth,
  },

  userImg: {
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },

  userContent: {
    position: "relative",
    borderRadius: 20,
    height: 24,
    marginLeft: 2,
    marginRight: 5,
    marginTop: 45,
    overflow: "hidden",
    textAlign: "center",
    width: wp("15.7%"),
  },

  userContentBackground: {
    backgroundColor: WHITE,
    borderRadius: 20,
    height: 24,
    opacity: 0.44,
    position: "absolute",
    width: wp("15.7%"),
  },

  userContentRow: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 6,
    marginRight: 10,
  },

  userName: {
    fontSize: 10,
  },
});

export default styles;
