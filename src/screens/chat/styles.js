import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import {
  WHITE,
  BACKGROUND,
  LIGHT_PURPLE,
  PURPLE_BLUE,
  TEXT_INPUT,
} from "../../styles/colors";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height; //full height

const styles = StyleSheet.create({
  background: {
    backgroundColor: BACKGROUND,
  },
  topBar: {
    flexDirection: "row",
    marginTop: 75,
    width: wp(95),
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: WHITE,
    fontSize: 20,
    fontFamily: "PoppinsMedium",
  },
  backBtn: {
    marginLeft: 15,
  },
  threeDots: {
    marginRight: 15,
  },
  secondTopBar: {
    marginTop: 30,
    width: wp(95),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  editText: {
    color: LIGHT_PURPLE,
    fontFamily: "PoppinsMedium",
    fontSize: 15,
  },
  newWrapper: {
    backgroundColor: PURPLE_BLUE,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 2,
  },
  newText: {
    color: WHITE,
    fontFamily: "PoppinsMedium",
    fontSize: 16,
    marginRight: 5,
    marginLeft: 10,
  },

  textInput: {
    backgroundColor: TEXT_INPUT,
    borderRadius: 30,
    width: wp(90),
    paddingVertical: 15,
    paddingHorizontal: 30,
    paddingTop: 15,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  searchText: {
    width: wp("60%"),
    color: WHITE,
    fontFamily: "PoppinsMedium",
    paddingVertical: 2,
  },

  searchHolder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;