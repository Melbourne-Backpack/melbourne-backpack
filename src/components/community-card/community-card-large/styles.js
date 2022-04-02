import { StyleSheet } from "react-native";
import { BLACK, WHITE } from "../../../styles/colors";
import { FONT_WEIGHT_EXTRA_BOLD } from "../../../styles/typography";

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    height: 285,
    marginLeft: 20,
    marginRight: 20,
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
    fontSize: 10,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },

  userCampus: {
    fontSize: 12,
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
    borderRadius: 20,
    height: 79,
    opacity: 0.44,
    position: "absolute",
    width: 218,
  },

  userContentRow: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 9,
    height: 25,
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
    marginLeft: 10,
    marginTop: 4,
    width: 65,
  },
});

export default styles;
