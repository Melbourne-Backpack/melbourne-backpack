import { StyleSheet } from "react-native";
import { BACKGROUND, LIGHT_PURPLE, WHITE } from "../../styles/colors";
import { scaleSize } from "../../styles/scale";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
    marginBottom: "20%",
  },
  wrapper: {
    padding: "2.5%",
  },
  heading1: {
    fontSize: 26,
    fontFamily: "PoppinsSemiBold",
    color: WHITE,
    marginTop: "2%",
    marginBottom: "5%",
  },
  secondHeader: {
    flexDirection: "row",
    marginVertical: scaleSize(22),
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading2: {
    color: WHITE,
    fontSize: 22,
    fontFamily: "PoppinsMedium",
  },
  subtitle: {
    color: LIGHT_PURPLE,
    fontFamily: "PoppinsRegular",
    fontSize: 16,
  },
});

export default styles;
