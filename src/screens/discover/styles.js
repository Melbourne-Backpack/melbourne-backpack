import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { WHITE, BACKGROUND, SELECTED_BUTTON } from "../../styles/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height; //full height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  topBar: {
    flexDirection: "row",
    marginTop: 75,
    width: wp(100),
    alignItems: "center",
    justifyContent: "space-between",
  },
  backBtn: {
    marginLeft: wp(10),
    marginRight: 0,
  },
  title: {
    color: WHITE,
    fontSize: 20,
    fontFamily: "PoppinsMedium",
  },
  messenger: {
    marginRight: wp(10),
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: wp(100),
    flex: 1,
    marginTop: 10,
  },
  flatlist: {
    width: wp(100),
  },
  videoCardHolder: {
    flexDirection: "row",
    margin: 10,
    marginBottom: 0,
  },
  videoImage: {
    width: "45%",
    height: 100,
  },
  titleHolder: {
    marginLeft: 10,
  },
  videoTitle: {
    fontSize: 15,
    width: Dimensions.get("screen").width / 2,
    color: WHITE,
    fontFamily: "PoppinsSemiBold",
    marginBottom: 5,
  },
  channelTitle: {
    fontSize: 12,
    color: WHITE,
    fontFamily: "PoppinsRegular",
    marginRight: 5,
  },
  channelHolder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  youtubeVideo: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});

export default styles;
