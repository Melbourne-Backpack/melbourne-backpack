import { Image, Text, View } from "react-native";
import { YELLOW } from "../../../styles/colors";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import { useFonts } from "expo-font";

const Review = ({ review }) => {
  const [loaded, error] = useFonts({
    PoppinsRegular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
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
          <Text style={styles.rating}>
            {review.rating} <AntDesign name="star" size={20} color={YELLOW} />
          </Text>
        </View>
      </View>
      <Text style={styles.text}>{review.comment}</Text>
    </View>
  );
};

export default Review;
