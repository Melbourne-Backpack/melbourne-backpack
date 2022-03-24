import { StyleSheet } from "react-native";
import { DARK_BLUE, WHITE } from "../../styles/colors";

const styles = StyleSheet.create({
  filterBtn: {
    backgroundColor: DARK_BLUE,
    borderRadius: 12,
    height: 44,
    marginTop: -4,
    marginLeft: 224,
    width: 44,
  },

  filterIcon: {
    justifyContent: "center",
    margin: 10,
  },

  filterText: {
    color: WHITE,
    fontSize: 16,
  },

  filterWrapper: {
    margin: 2,
  },

  optionWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default styles;
