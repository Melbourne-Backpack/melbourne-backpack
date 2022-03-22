import { StyleSheet } from "react-native";
import { WHITE } from "../../../styles/colors";

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    height: 86,
    margin: 5,
    overflow: "hidden",
    width: 63,
  },

  userImg: {
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },

  userContent: {
    backgroundColor: WHITE,
    borderRadius: 20,
    height: 24,
    marginLeft: 2,
    marginRight: 5,
    marginTop: 45,
    overflow: "hidden",
    textAlign: "center",
    width: 59,
  },
});

export default styles;
