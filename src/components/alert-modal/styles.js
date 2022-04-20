import { StyleSheet } from "react-native";
import {
  ALERT_PURPLE_BUTTON,
  ALERT_PURPLE_MESSAGE,
  BLACK,
  LIGHT_PURPLE,
  PLACEHOLDER,
  PURPLE_BLUE,
  TEXT_INPUT,
  WHITE,
} from "../../styles/colors";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  alertContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  alertModal: {
    backgroundColor: ALERT_PURPLE_MESSAGE,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: wp("80%"),
  },
  errorMessage: {
    textAlign: "center",
    color: BLACK,
    fontFamily: "PoppinsMedium",
    fontSize: 15,
    paddingVertical: 10,
  },
  closeButton: {
    width: wp("80%"),
    backgroundColor: ALERT_PURPLE_BUTTON,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 10,
  },
  closeButtonText: {
    color: BLACK,
    fontFamily: "PoppinsBlack",
    fontSize: 17,
    textAlign: "center",
    paddingVertical: 10,
  },
});

export default styles;
