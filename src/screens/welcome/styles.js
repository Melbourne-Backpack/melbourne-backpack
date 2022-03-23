import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { scaleFont, scaleSize } from "../../styles/scale";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height; //full height
console.log(width, height);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f29",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  firstText: {
    color: "white",
    fontSize: hp("2%"),
    opacity: 0.9,
    paddingBottom: 30,
    fontFamily: "PoppinsSemiBold",
  },
  secondText: {
    color: "white",
    fontSize: hp("6.5%"),
    fontFamily: "PoppinsThin",
    paddingBottom: 10,
  },
  thirdText: {
    color: "white",
    fontSize: hp("2%"),
    opacity: 0.8,
    paddingTop: 20,
    paddingBottom: 35,
    fontFamily: "PoppinsRegular",
  },
  buttonContainer: {
    alignSelf: "center",
  },
  viewButton: {
    backgroundColor: "#4838d1",
    borderRadius: 25,
    paddingVertical: 20,
    paddingHorizontal: wp("15%"),
  },
  textButton: {
    color: "white",
    fontSize: hp("1.8%"),
    fontFamily: "PoppinsMedium",
  },
});

export default styles;
