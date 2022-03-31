import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import {
  BACKGROUND,
  DARK_BLUE_PURPLE,
  GREY,
  RED,
  WHITE,
} from "../../styles/colors";

const styles = StyleSheet.create({
  background: {
    backgroundColor: BACKGROUND,
  },

  backBtn: {
    marginLeft: wp(10),
    marginRight: 0,
  },

  cellWrapper: {
    borderColor: DARK_BLUE_PURPLE,
    borderTopWidth: 1,
  },

  profileImage: {
    borderRadius: 20,
    height: 160,
    width: 160,
  },

  profileImageWrapper: {
    alignItems: "center",
    marginTop: 80,
  },

  title: {
    color: WHITE,
    fontSize: 24,
    marginLeft: wp(25),
  },

  topBar: {
    flexDirection: "row",
    marginTop: 75,
    width: wp(100),
  },

  userInfoGrid: {
    marginTop: 50,
    alignContent: "stretch",
    flexWrap: "wrap",
    height: 50,
  },

  userContentDisplay: {
    marginTop: 70,
  },

  userContentRow: {
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: GREY,
    flexDirection: "row",
    minHeight: 50,
  },

  userContentLastRow: {
    borderBottomWidth: 1,
  },

  userContentHeading: {
    color: WHITE,
    marginLeft: wp(5),
  },

  userContent: {
    color: WHITE,
    marginLeft: wp(5),
    marginRight: wp(5),
  },

  userContentHeadingWrapper: {
    flex: 1,
  },

  userContentWrapper: {
    flex: 2,
  },

  logoutBtnWrapper: {
    marginTop: 20,
    alignItems: "center",
  },

  logoutBtn: {
    backgroundColor: RED,
    borderColor: RED,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },

  logoutBtnText: {
    color: WHITE,
  },
});
export default styles;
