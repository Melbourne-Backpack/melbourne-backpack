import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height; //full height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    color: "#ffffff",
    fontSize: 50,
    fontWeight: "800",
    marginTop: 100,
  },
  viewButton: {
    backgroundColor: "#1c1c4d",
    borderRadius: 15,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 50,
  },
  textButton: { color: "white", fontSize: 20, fontWeight: "800" },
  versionText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "400",
    marginTop: 250,
  },
});

export default styles;
