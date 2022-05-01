import { StyleSheet } from "react-native";
import { PURPLE_BLUE, WHITE, YELLOW } from "../../styles/colors";

const styles = StyleSheet.create({
  messageContainer: {
    marginBottom: "1.5%",
  },
  bubble: {
    padding: "1%",
  },
  bubbleLeft: {
    backgroundColor: "#555555",
  },
  bubbleRight: {
    backgroundColor: PURPLE_BLUE,
  },
  text: {
    fontFamily: "PoppinsRegular",
    color: WHITE,
    fontSize: 16,
  },
  link: {
    color: YELLOW,
  },
  inputToolBar: {
    backgroundColor: "rgba(55, 55, 55, 0.8)",
    borderTopColor: "transparent",
    position: "absolute",
    bottom: 0,
  },
});

export default styles;
