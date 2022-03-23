import { ImageBackground, Text, View } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

import styles from "./styles";
import { GREY, YELLOW } from "../../styles/colors";

const HousingCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imgContainer}>
        <ImageBackground
          source={require("../../../assets/images/student-housing.jpg")}
          style={styles.backgroundImg}
          imageStyle={{ borderRadius: 20 }}
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
        <Text style={[styles.text, styles.location]}>
          250 Spencer Street, Melbourne, VIC 3000
        </Text>

        <View style={styles.extraWrapper}>
          <View style={styles.extraContainer}>
            <Text style={styles.extra}>50 sqm</Text>
            <MaterialCommunityIcons name="floor-plan" size={35} color={GREY} />
          </View>

          <View style={styles.extraContainer}>
            <Text style={styles.extra}>2</Text>
            <Ionicons name="bed" size={35} color={GREY} />
          </View>

          <View style={styles.extraContainer}>
            <Text style={styles.extra}>1</Text>
            <MaterialCommunityIcons name="shower" size={35} color={GREY} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HousingCard;
