import { StyleSheet } from "react-native";
import { WHITE } from "../../styles/colors";

const styles = StyleSheet.create({
  filterText: {
    color: WHITE,
    fontSize: 16,
  },

  filterWrapper: {
    marginLeft: 2,
    marginRight: 2,
  },

  optionWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default styles;
