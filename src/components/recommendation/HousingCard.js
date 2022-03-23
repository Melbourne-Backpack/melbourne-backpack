import { ImageBackground, Text, View } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import { YELLOW } from "../../styles/colors";

const HousingCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imgContainer}>
        <ImageBackground
          source={require("../../../assets/images/student-housing.jpg")}
          style={styles.backgroundImg}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <Text style={styles.rating}>
              3.4 <AntDesign name="star" size={20} color={YELLOW} />
            </Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.info}>
        <Text style={[styles.name, styles.text]}>Atira</Text>
        <Text style={[styles.price, styles.text]}>$399.00</Text>
        <Text style={styles.text}>250 Spencer Street, Melbourne, VIC 3000</Text>
      </View>
    </View>
  );
};

export default HousingCard;
