import { Image, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { YELLOW } from "../../styles/colors";
import styles from "./smallerCardStyles";

const SmallerRecommendationCard = ({ data }) => {
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
            {data.title}
          </Text>
        </View>
        <Text style={[styles.text, styles.price]}>${data.price}</Text>
        <Text style={{ color: YELLOW }}>
          {data.rating} <AntDesign name="star" size={15} color={YELLOW} />
        </Text>
      </View>
    </View>
  );
};

export default SmallerRecommendationCard;
