import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

let width = Dimensions.get("window").width; //full width
let height = Dimensions.get("window").height; //full height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f29",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  firstText: {
    color: "white",
    fontSize: 18,
    fontWeight: "800",
    opacity: 0.9,
    paddingBottom: 20,
  },
  secondText: {
    color: "white",
    fontSize: 70,
    fontWeight: "200",
    opacity: 1.5,
  },
  thirdText: {
    color: "white",
    fontSize: 20,
    fontWeight: "200",
    opacity: 0.9,
    paddingTop: 20,
    paddingBottom: 35,
  },
  buttonContainer: {
    alignSelf: "center",
  },
  viewButton: {
    backgroundColor: "#4838d1",
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 60,
  },
  textButton: { color: "white", fontSize: 17, fontWeight: "600" },
});

export default styles;
