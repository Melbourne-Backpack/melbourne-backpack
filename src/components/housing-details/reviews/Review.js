import { Image, Text, View } from "react-native";

import styles from "./styles";
import { useFonts } from "expo-font";
import StarRatingView from "../StarRatingView";

const Review = ({ review }) => {
  const [loaded, error] = useFonts({
    PoppinsRegular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("../../../../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image
          source={require("../../../../assets/images/Junho.png")}
          style={styles.img}
          resizeMode="cover"
        />

        <View>
          <Text style={styles.username}>{review.username}</Text>
          <View style={styles.ratingContainer}>
            <StarRatingView width={18} height={18} rating={review.rating} />
            <Text style={styles.rating}>{review.rating}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.text}>{review.comment}</Text>
    </View>
  );
};

export default Review;
