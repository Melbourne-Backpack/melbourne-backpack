import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    display: "block",
    margin: 10,
    padding: 5,
    height: 86,
    width: 63,
    overflow: "hidden",
  },
  userImg: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  userContent: {
    position: "relative",
    top: 30,
    height: 20,
    overflow: "hidden",
  },
});

export default styles;
