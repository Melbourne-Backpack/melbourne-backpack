import { StyleSheet } from "react-native";
import { WHITE, BACKGROUND, PURPLE_BLUE } from "../../styles/colors";
import {
  FONT_WEIGHT_EXTRA_BOLD,
  FONT_WEIGHT_MEDIUM,
  FONT_WEIGHT_SEMI_BOLD,
} from "../../styles/typography";

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND,
  },

  communityList: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 27,
  },

  communityListContainer: {
    marginLeft: 52,
  },

  communityListText: {
    color: WHITE,
    fontSize: 35,
    fontWeight: FONT_WEIGHT_SEMI_BOLD,
    marginTop: 32,
  },

  filterBtn: {
    marginTop: -4,
    marginLeft: 224,
  },

  mostLikeYou: {
    marginTop: 39,
  },

  mostLikeYouContainer: {
    marginLeft: 24,
  },

  mostLikeYouText: {
    color: WHITE,
    fontSize: 20,
    fontWeight: FONT_WEIGHT_EXTRA_BOLD,
    marginTop: 53,
  },

  seeMoreBtn: {
    color: PURPLE_BLUE,
    fontSize: 14,
    fontWeight: FONT_WEIGHT_MEDIUM,
  },

  seeMoreBtnContainer: {
    marginBottom: 60,
    marginLeft: 200,
    marginTop: 18,
  },
});

export default styles;
