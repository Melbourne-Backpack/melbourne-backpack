import { StyleSheet } from "react-native";
import { BACKGROUND, TEXT_INPUT, WHITE, YELLOW } from "../../styles/colors";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { scaleSize } from "../../styles/scale";

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND,
    position: "absolute",
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  wrapper: {
    paddingHorizontal: wp(7),
    marginTop: wp(7),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: wp(5),
    paddingHorizontal: wp(3),
  },
  text: {
    color: WHITE,
  },
  building: {
    fontSize: 18,
    fontFamily: "PoppinsMedium",
    marginLeft: wp(12),
  },
  img: {
    width: "100%",
    height: scaleSize(300),
  },
  name: {
    fontFamily: "PoppinsBold",
    fontSize: 25,
    marginVertical: wp(5),
  },
  address: {
    fontFamily: "PoppinsRegular",
    fontSize: 18,
    textTransform: "uppercase",
    marginBottom: wp(1),
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    marginRight: wp(2),
  },
  rating: {
    fontFamily: "PoppinsSemiBold",
    color: YELLOW,
    fontSize: 30,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: wp(5),
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: wp(10),
    marginBottom: wp(5),
  },
  sectionTitle: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 20,
  },
  desc: {
    marginBottom: wp(5),
    fontFamily: "PoppinsRegular",
    fontSize: 15,
  },
  comment: {
    backgroundColor: TEXT_INPUT,
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    fontFamily: "PoppinsRegular",
    marginBottom: 30,
    textAlignVertical: "top",
  },
  reviewContainer: {
    marginBottom: "15%",
  },
});

export default styles;
