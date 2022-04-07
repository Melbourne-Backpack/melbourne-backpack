import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

import styles from "./styles";
import { GREY, YELLOW } from "../../../styles/colors";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const RecommendationCard = ({ data, housing }) => {
  const navigation = useNavigation();

  const [loaded, error] = useFonts({
    PoppinsExtraBold: require("../../../../assets/fonts/Poppins-ExtraBold.ttf"),
    PoppinsRegular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.card}>
      {housing !== true ? (
        <ImageBackground
          source={require("../../../../assets/images/student-housing.jpg")}
          style={styles.backgroundImg}
          imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
          resizeMode="cover"
        >
          <View style={styles.overlay} />
        </ImageBackground>
      ) : (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Details")}
        >
          <ImageBackground
            source={require("../../../../assets/images/student-housing.jpg")}
            style={styles.backgroundImg}
            imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
            resizeMode="cover"
          >
            <View style={styles.overlay}>
              <Text style={styles.rating}>
                {data.rating} <AntDesign name="star" size={30} color={YELLOW} />
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      )}

      <View style={styles.info}>
        {housing !== true ? (
          <Text style={[styles.name, styles.text]}>{data.name}</Text>
        ) : (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Details")}>
              <Text style={[styles.name, styles.text]}>{data.name}</Text>
            </TouchableOpacity>
            <Text style={[styles.price, styles.text]}>${data.price}</Text>
          </View>
        )}
        <Text style={[styles.text, styles.location]}>
          <Ionicons name="location-sharp" size={16} color="white" />{" "}
          {data.address}
        </Text>

        {housing !== true ? (
          <></>
        ) : (
          <View style={styles.extraOuterContainer}>
            <View style={styles.extraContainer}>
              <Text style={styles.extra}>{data.area} sqm</Text>
              <MaterialCommunityIcons
                name="floor-plan"
                size={35}
                color={GREY}
              />
            </View>

            <View style={styles.extraContainer}>
              <Text style={styles.extra}>{data.bedroom}</Text>
              <Ionicons name="bed" size={35} color={GREY} />
            </View>

            <View style={styles.extraContainer}>
              <Text style={styles.extra}>{data.bathroom}</Text>
              <MaterialCommunityIcons name="shower" size={35} color={GREY} />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default RecommendationCard;
