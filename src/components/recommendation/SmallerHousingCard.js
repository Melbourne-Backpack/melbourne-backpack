import { Image, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { YELLOW } from "../../styles/colors";
import styles from "./smallerCardStyles";

const SmallerHousingCard = ({ title, price, rating }) => {
  return (
    <View style={styles.card}>
      <View>
        <Image
          source={require("../../../assets/images/placeholder-612x612.jpg")}
          resizeMode="cover"
          style={styles.img}
        />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.longTextContainer}>
          <Text style={[styles.title, styles.text]} numberOfLines={2}>
            {title}
          </Text>
        </View>
        <Text style={[styles.text, styles.price]}>${price}</Text>
        <Text style={{ color: YELLOW }}>
          {rating} <AntDesign name="star" size={15} color={YELLOW} />
        </Text>
      </View>
    </View>
  );
};

export default SmallerHousingCard;
