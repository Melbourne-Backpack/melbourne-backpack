import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

import styles from "./styles";
import { GREY, YELLOW } from "../../styles/colors";

const HousingCard = ({
  title,
  price,
  address,
  rating,
  area,
  bedroom,
  bathroom,
}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity activeOpacity={0.5}>
        <ImageBackground
          source={require("../../../assets/images/student-housing.jpg")}
          style={styles.backgroundImg}
          imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <Text style={styles.rating}>
              {rating} <AntDesign name="star" size={20} color={YELLOW} />
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      <View style={styles.info}>
        <TouchableOpacity>
          <Text style={[styles.name, styles.text]}>{title}</Text>
        </TouchableOpacity>
        <Text style={[styles.price, styles.text]}>${price}</Text>
        <Text style={[styles.text, styles.location]}>
          <Ionicons name="location-sharp" size={12} color="white" /> {address}
        </Text>

        <View style={styles.extraOuterContainer}>
          <View style={styles.extraContainer}>
            <Text style={styles.extra}>{area} sqm</Text>
            <MaterialCommunityIcons name="floor-plan" size={35} color={GREY} />
          </View>

          <View style={styles.extraContainer}>
            <Text style={styles.extra}>{bedroom}</Text>
            <Ionicons name="bed" size={35} color={GREY} />
          </View>

          <View style={styles.extraContainer}>
            <Text style={styles.extra}>{bathroom}</Text>
            <MaterialCommunityIcons name="shower" size={35} color={GREY} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HousingCard;
