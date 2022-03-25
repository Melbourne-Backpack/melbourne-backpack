import { StyleSheet } from "react-native";
import { WHITE } from "../../../styles/colors";

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    height: 86,
    marginLeft: 5,
    marginBottom: 18,
    overflow: "hidden",
    width: 63,
  },

  userImg: {
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },

  userContent: {
    position: "relative",
    borderRadius: 20,
    height: 24,
    marginLeft: 2,
    marginRight: 5,
    marginTop: 45,
    overflow: "hidden",
    textAlign: "center",
    width: 59,
  },

  userContentBackground: {
    backgroundColor: WHITE,
    height: 24,
    position: "absolute",
    borderRadius: 20,
    width: 59,
  },

  userName: {
    paddingLeft: 10,
    paddingRight: 10,
  },

  userNameScroll: {},
});

export default styles;
