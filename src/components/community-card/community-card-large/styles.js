import { StyleSheet } from "react-native";
import { BLACK, WHITE } from "../../../styles/colors";
import { FONT_WEIGHT_EXTRA_BOLD } from "../../../styles/typography";

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    height: 285,
    marginLeft: 24,
    overflow: "hidden",
    width: 234,
  },

  detailBtn: {
    backgroundColor: WHITE,
    borderRadius: 20,
    height: 28,
    marginLeft: 17,
    width: 52,
  },

  detailBtnText: {
    fontSize: 12,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },

  userCampus: {
    fontSize: 14,
    height: 16,
    marginLeft: 36,
    width: 92,
  },

  userContent: {
    borderRadius: 20,
    height: 78,
    marginBottom: 20,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 198,
    width: 210,
  },

  userContentBackground: {
    backgroundColor: WHITE,
    position: "absolute",
    borderRadius: 20,
    opacity: 0.44,
    width: 218,
    height: 79,
  },

  userContentRow: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 9,
  },

  userImg: {
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },

  userName: {
    color: BLACK,
    fontWeight: FONT_WEIGHT_EXTRA_BOLD,
    fontSize: 16,
    height: 20,
    marginLeft: 12,
    width: 115,
  },

  userTopic: {
    height: 16,
    marginLeft: 26,
    marginTop: 4,
    width: 52,
  },
});

export default styles;
