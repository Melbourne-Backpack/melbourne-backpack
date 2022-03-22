import { Text, SafeAreaView, View, ImageBackground } from "react-native";
import styles from "./styles";

const HousingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading1}>Trending Housing</Text>
      <View>
        <View>
          <ImageBackground
            source={require("../../../assets/images/student-housing.jpg")}
            style={styles.backgroundImg}
          />
        </View>
        <Text style={styles.text}>Atira</Text>
        <Text style={styles.text}>$399.00</Text>
        <Text style={styles.text}>250 Spencer Street, Melbourne, VIC 3000</Text>
      </View>
    </SafeAreaView>
  );
};
export default HousingScreen;
