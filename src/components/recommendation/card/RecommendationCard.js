import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { GREY, WHITE, YELLOW } from "../../../styles/colors";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import Capitalize from "../../../utils/Capitalize";
import { DISTANCE_CALCULATOR_KEY } from "@env";

const RecommendationCard = ({ data, housing, transport }) => {
  const navigation = useNavigation();
  const [address, setAddress] = useState("");
  const [distance, setDistance] = useState("");
  const [routeVisible, setRouteVisible] = useState(false);
  const lat = "-37.8080770201347";
  const long = "144.96268921184907";

  const [loaded, error] = useFonts({
    PoppinsExtraBold: require("../../../../assets/fonts/Poppins-ExtraBold.ttf"),
    PoppinsRegular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("../../../../assets/fonts/Poppins-Medium.ttf"),
  });

  const calculateDistanceFromCoordinates = (lat2, long2) => {
    const distanceUrl = `http://dev.virtualearth.net/REST/v1/Routes/Walking?wayPoint.1=${lat},${long}&wayPoint.2=${lat2},${long2}&key=${DISTANCE_CALCULATOR_KEY}`;
    try {
      fetch(distanceUrl, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setDistance(
            data["resourceSets"][0]["resources"][0]["travelDistance"]
          );
        });
    } catch (e) {
      console.log(e.message());
    }
  };

  useEffect(() => {
    if (data.address !== undefined) {
      setAddress(Capitalize(data.address));
    }
    if (transport) {
      if (data) {
        calculateDistanceFromCoordinates(data["stopLat"], data["stopLong"]);
      }
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
                <View style={styles.modeContainer}>
                  <Text style={[styles.distance]}>{data["transportType"]}</Text>
                </View>

                <View style={styles.distanceContainer}>
                  <FontAwesome5 name="walking" size={24} color={WHITE} />
                  <Text style={[styles.distance, styles.distanceText]}>
                    approx. {distance * 1000}m from RMIT
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => setRouteVisible(!routeVisible)}
                >
                  <Text style={[styles.clickMore]}>
                    View routes that go through this stop
                    <Feather name="chevron-down" size={16} color={YELLOW} />
                  </Text>
                </TouchableOpacity>

                {routeVisible
                  ? data["routes"].map((route, id) => (
                      <Text key={id} style={[styles.text]}>
                        Route
                        {route["routeNum"] === ""
                          ? `${route["routeNum"]}: ${route["routeName"]}`
                          : ` ${route["routeNum"]}: ${route["routeName"]}`}
                      </Text>
                    ))
                  : null}
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
