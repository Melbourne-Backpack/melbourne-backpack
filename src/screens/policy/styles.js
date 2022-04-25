import { Dimensions, StyleSheet } from "react-native";
import TermsAndConditions from "./Terms";
import {
  WHITE,
  BACKGROUND,
  SELECTED_BUTTON,
  TEXT_INPUT,
  RED,
} from "../../styles/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 22,
    alignSelf: "center",
    color: WHITE,
  },
  text: {
    color: WHITE,
  },
  tcP: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
    color: WHITE,
  },
  tcL: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
    color: WHITE,
  },
  tcContainer: {
    marginTop: 15,
    marginBottom: 15,
    height: height * 0.7,
  },
  button: {
    backgroundColor: SELECTED_BUTTON,
    borderRadius: 20,
    padding: 10,
  },

  buttonDisabled: {
    backgroundColor: "#999",
    borderRadius: 5,
    padding: 10,
  },

  buttonLabel: {
    fontSize: 14,
    color: WHITE,
    alignSelf: "center",
  },
});

export default styles;
