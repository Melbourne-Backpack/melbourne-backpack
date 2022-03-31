import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BACKGROUND, DARK_BLUE_PURPLE, GREY, WHITE } from "../../styles/colors";
import { min } from "lodash";

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
  },

  title: {
    color: WHITE,
    marginLeft: wp(30),
  },

  topBar: {
    flexDirection: "row",
    marginTop: 75,
    width: wp(100),
  },

  userInfo: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: GREY,
    color: WHITE,
    width: wp(55),
    height: min(50),
    fontSize: 14,
    flexWrap: "wrap",
  },

  userInfoHeading: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: GREY,
    color: WHITE,
    width: wp(35),
    fontSize: 14,
    marginLeft: wp(5),
  },

  userInfoGrid: {
    marginTop: 50,
    alignContent: "stretch",
    flexWrap: "wrap",
    height: 50,
  },
});
export default styles;
