import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { GREY, YELLOW } from "../../../styles/colors";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import Capitalize from "../../../utils/Capitalize";

const RecommendationCard = ({ data, housing, transport }) => {
  const navigation = useNavigation();
  const [address, setAddress] = useState("");

  const [loaded, error] = useFonts({
    PoppinsExtraBold: require("../../../../assets/fonts/Poppins-ExtraBold.ttf"),
    PoppinsRegular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("../../../../assets/fonts/Poppins-Medium.ttf"),
  });

  useEffect(() => {
    if (data.address !== undefined) {
      setAddress(Capitalize(data.address));
    }
  }, [data]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.card}>
      {housing !== true ? (
        transport ? (
          data ? (
            <>
              <ImageBackground
                source={data["img"]}
                style={styles.backgroundImg}
                imageStyle={{
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
                resizeMode="cover"
              />

              <View style={styles.info}>
                <Text style={[styles.name, styles.text]}>
                  Stop: {data["stopName"]}
                </Text>
                <Text style={[styles.text, styles.location]}>
                  Transportation mode: {data["transportType"]}
                </Text>

                <Text style={[styles.clickMore]}>
                  View routes that go through this stop
                  <Feather name="chevron-down" size={16} color={YELLOW} />
                </Text>
                {/*<Text style={[styles.text, styles.location]}>*/}
                {/*  <Ionicons name="location-sharp" size={16} color="white" />{" "}*/}
                {/*  {data.address}*/}
                {/*</Text>*/}
              </View>
            </>
          ) : null
        ) : (
          <>
            <ImageBackground
              source={{ uri: data.image }}
              style={styles.backgroundImg}
              imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
              resizeMode="cover"
            />

            <View style={styles.info}>
              <Text style={[styles.name, styles.text]}>{data.title}</Text>
              <Text style={[styles.text, styles.location]}>
                <Ionicons name="location-sharp" size={16} color="white" />{" "}
                {data.address}
              </Text>
            </View>
          </>
        )
      ) : (
        <>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Details", { id: data.id })}
          >
            <ImageBackground
              source={{ uri: data.image }}
              style={styles.backgroundImg}
              imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
              resizeMode="cover"
            >
              <View style={styles.overlay}>
                <Text style={styles.rating}>
                  {data.rating}{" "}
                  <AntDesign name="star" size={30} color={YELLOW} />
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <View style={styles.info}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", { id: data.id })}
            >
              <Text style={[styles.name, styles.text]}>
                {data.title
                  ? data.title[0].toUpperCase() +
                    data.title.slice(1, data.title.length)
                  : data.title}
              </Text>
            </TouchableOpacity>
            <Text style={[styles.price, styles.text]}>
              {typeof data.price !== "undefined"
                ? data.price.length > 4 && data.price.substring(0, 4) === "from"
                  ? "From $" + data.price.split(" ")[1]
                  : "$" + data.price
                : null}
            </Text>
            <Text style={[styles.text, styles.location]}>
              <Ionicons name="location-sharp" size={16} color="white" />{" "}
              {address}
            </Text>

            <View style={styles.extraOuterContainer}>
              <View style={styles.extraContainer}>
                <Text style={styles.extra}>{data.bed}</Text>
                <Ionicons name="bed" size={35} color={GREY} />
              </View>

              <View style={styles.extraContainer}>
                <Text style={styles.extra}>{data.bath}</Text>
                <MaterialCommunityIcons name="shower" size={35} color={GREY} />
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default RecommendationCard;
