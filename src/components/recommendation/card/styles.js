import { StyleSheet } from "react-native";
import { DARK_BLUE_PURPLE, GREY, WHITE, YELLOW } from "../../../styles/colors";
import { scaleSize } from "../../../styles/scale";

const styles = StyleSheet.create({
  card: {
    backgroundColor: DARK_BLUE_PURPLE,
    borderRadius: 20,
    marginBottom: scaleSize(30),
  },
  backgroundImg: {
    width: "100%",
    height: scaleSize(300),
  },
  overlay: {
    height: "100%",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0, 0.32)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  rating: {
    color: YELLOW,
    fontSize: 30,
    margin: scaleSize(10),
    fontFamily: "PoppinsSemiBold",
  },
  info: {
    paddingHorizontal: scaleSize(10),
    paddingVertical: scaleSize(7),
    paddingBottom: 15,
  },
  text: {
    color: WHITE,
    marginTop: scaleSize(5),
    marginBottom: 10,
  },
  name: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 20,
  },
  clickMore: {
    fontSize: 16,
    color: YELLOW,
    textDecorationLine: "underline",
    marginBottom: scaleSize(5),
  },
  price: {
    fontFamily: "PoppinsExtraBold",
    fontSize: 26,
    marginBottom: scaleSize(5),
  },
  location: {
    fontSize: 16,
    marginBottom: scaleSize(20),
    fontFamily: "PoppinsRegular",
  },
  extraOuterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  extraContainer: {
    alignItems: "center",
  },
  extra: {
    fontSize: 14,
    color: GREY,
    textAlign: "center",
  },
});

export default styles;
