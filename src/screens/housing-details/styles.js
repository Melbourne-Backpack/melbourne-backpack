import { StyleSheet } from "react-native";
import { BACKGROUND, WHITE } from "../../styles/colors";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND,
    padding: "5%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  building: {
    color: WHITE,
    fontSize: 20,
    marginLeft: wp(10),
  },
});

export default styles;
