import { Image, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { YELLOW } from "../../styles/colors";
import styles from "./smallerCardStyles";

const SmallerHousingCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../../../assets/images/placeholder-612x612.jpg")}
          resizeMode="cover"
          style={styles.img}
        />
      </View>

      <View>
        <Text>4 bedroom apartment - Atira</Text>
        <Text>$399.00</Text>
        <Text>
          4.5 <AntDesign name="star" size={15} color={YELLOW} />
        </Text>
      </View>
    </View>
  );
};

export default SmallerHousingCard;
