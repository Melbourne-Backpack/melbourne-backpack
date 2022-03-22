import { ImageBackground, Text, View } from "react-native";
import styles from "./styles";

const HousingCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/images/student-housing.jpg")}
          style={styles.backgroundImg}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.text}>Atira</Text>
      <Text style={styles.text}>$399.00</Text>
      <Text style={styles.text}>250 Spencer Street, Melbourne, VIC 3000</Text>
    </View>
  );
};

export default HousingCard;
