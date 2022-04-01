import { StyleSheet } from "react-native";
import { BACKGROUND, WHITE } from "../../styles/colors";

const styles = StyleSheet.create({
  tabBar: {
    borderTopColor: WHITE,
    backgroundColor: BACKGROUND,
    position: "absolute",
    bottom: 0,
    paddingTop: 10,
    zIndex: 8,
  },
});

export default styles;
