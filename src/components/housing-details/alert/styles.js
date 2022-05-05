import { StyleSheet } from "react-native";
import { TEXT_INPUT, WHITE } from "../../../styles/colors";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  alertContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  alertModal: {
    backgroundColor: TEXT_INPUT,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: wp("80%"),
  },
  text: {
    textAlign: "center",
    color: WHITE,
    fontFamily: "PoppinsMedium",
    fontSize: 15,
    paddingVertical: 15,
  },
});

export default styles;
