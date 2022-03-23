import { StyleSheet } from "react-native";
import { WHITE } from "../../styles/colors";

const styles = StyleSheet.create({
  filterBtn: {
    marginTop: -4,
    marginLeft: 224,
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
