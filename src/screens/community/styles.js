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

  communityList: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: hp("3%"),
  },

  communityListContainer: {
    marginLeft: wp("12.5%"),
    marginRight: wp("12.5%"),
  },

  communityListText: {
    color: WHITE,
    fontSize: responsiveFontSize(),
    fontWeight: FONT_WEIGHT_EXTRA_BOLD,
    textAlign: "right",
    marginRight: 49,
    marginTop: hp("4%"),
  },

  mostLikeYou: {
    marginTop: hp("4.8%"),
  },

  mostLikeYouContainer: {
    marginLeft: wp("6.4%"),
  },

  mostLikeYouText: {
    color: WHITE,
    fontSize: hp("2.4%"),
    fontWeight: FONT_WEIGHT_EXTRA_BOLD,
    marginTop: hp("6.5%"),
  },

  seeMoreBtn: {
    color: PURPLE_BLUE,
    fontSize: hp("1.7%"),
    fontWeight: FONT_WEIGHT_MEDIUM,
  },

  seeMoreBtnContainer: {
    marginBottom: hp("7.3%"),
    marginLeft: wp("53%"),
    marginTop: hp("4.5%"),
  },
});

export default styles;
