import { StyleSheet } from "react-native";
import { WHITE, BACKGROUND, PURPLE_BLUE } from "../../styles/colors";

import {
  FONT_WEIGHT_EXTRA_BOLD,
  FONT_WEIGHT_MEDIUM,
} from "../../styles/typography";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const responsiveFontSize = () => {
  if (wp("100%") < 330) {
    return 27;
  } else return 35;
};

// designed dimension:375 X 812

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  melbourneBackpackText: {
    color: WHITE,
    fontSize: responsiveFontSize(),
    fontWeight: FONT_WEIGHT_EXTRA_BOLD,
    textAlign: "right",
    marginRight: 49,
    marginTop: hp("4%"),
  },
  furtherButton: {
    backgroundColor: PURPLE_BLUE,
    borderRadius: 20,
    height: hp("6%"),
    width: wp("80%"),
    alignSelf: "center",
    justifyContent: "center",
    marginTop: hp("5%"),
  },
});

export default styles;
