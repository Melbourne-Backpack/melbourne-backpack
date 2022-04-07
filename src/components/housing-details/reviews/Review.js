import { Image, Text, View } from "react-native";
import { YELLOW } from "../../../styles/colors";
import styles from "../../../screens/housing-details/styles";
import { AntDesign } from "@expo/vector-icons";

const Review = ({ review }) => {
  return (
    <View>
      <Image
        source={require("../../../../assets/images/avatar-placeholder.jpg")}
      />
      <Text>{review.username}</Text>
      <AntDesign name="star" size={20} color={YELLOW} style={styles.star} />
      <Text>{review.rating}</Text>
      <Text>{review.comment}</Text>
    </View>
  );
};

export default Review;
