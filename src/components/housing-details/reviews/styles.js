import { StyleSheet } from "react-native";
import { WHITE, YELLOW } from "../../../styles/colors";

const styles = StyleSheet.create({
  container: {
    marginBottom: "12%",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "5%",
  },
  img: {
    width: 60,
    height: 60,
    aspectRatio: 1,
    borderRadius: 10,
    marginRight: 30,
  },
  username: {
    color: WHITE,
    fontFamily: "PoppinsMedium",
    fontSize: 18,
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: "row",
  },
  rating: {
    color: YELLOW,
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",
    marginLeft: 10,
  },
  text: {
    color: WHITE,
    fontFamily: "PoppinsRegular",
    fontSize: 15,
  },
});

export default styles;
