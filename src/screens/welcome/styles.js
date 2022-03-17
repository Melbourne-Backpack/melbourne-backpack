import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height; //full height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f29",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 60,
  },
  firstText: {
    color: "white",
    fontSize: 20,
    fontWeight: "800",
    opacity: 0.8,
  },
  secondText: {
    color: "white",
    fontSize: 70,
    fontWeight: "200",
    opacity: 0.8,
  },
  thirdText: {
    color: "white",
    fontSize: 20,
    fontWeight: "200",
    opacity: 0.8,
    paddingRight: 20,
    paddingTop: 30,
  },
  viewButton: {
    backgroundColor: "#4838d1",
    borderRadius: 30,
    paddingLeft: 65,
    paddingRight: 65,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 50,
  },
  textButton: { color: "white", fontSize: 15, fontWeight: "600" },
});

export default styles;
