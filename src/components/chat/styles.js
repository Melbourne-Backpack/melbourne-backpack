import { StyleSheet } from "react-native";
import {
  BACKGROUND,
  PLACEHOLDER,
  PURPLE_BLUE,
  WHITE,
  YELLOW,
} from "../../styles/colors";

const styles = StyleSheet.create({
  bubble: {
    padding: "1%",
    marginBottom: "1.5%",
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
    backgroundColor: BACKGROUND,
    borderTopColor: "transparent",
    paddingRight: 10,
  },
  action: {
    width: "10%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "3%",
    marginRight: 4,
    marginBottom: 0,
  },
  composer: {
    backgroundColor: PLACEHOLDER,
    borderRadius: 50,
    borderColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    marginLeft: 0,
    fontSize: 12,
  },
});

export default styles;
