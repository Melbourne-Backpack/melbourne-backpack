import { StyleSheet } from "react-native";
import { PURPLE_BLUE, WHITE, YELLOW } from "../../styles/colors";

const styles = StyleSheet.create({
  bubbleLeft: {
    backgroundColor: "#555555",
    padding: "1%",
  },
  bubbleRight: {
    backgroundColor: PURPLE_BLUE,
    padding: "1%",
  },
  text: {
    fontFamily: "PoppinsRegular",
    color: WHITE,
    fontSize: 16,
  },
  link: {
    color: YELLOW,
  },
});

export default styles;
