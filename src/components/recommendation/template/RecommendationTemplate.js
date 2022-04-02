import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import RecommendationCard from "../card/RecommendationCard";
import { useFonts } from "expo-font";
import { useState } from "react";
import FilterCategory from "../filter/FilterCategory";
import { Ionicons } from "@expo/vector-icons";
import { LIGHT_BLUE } from "../../../styles/colors";

const RecommendationTemplate = ({
  topic,
  firstData,
  otherData,
  housing,
  categories,
}) => {
  const [isVisible, setVisible] = useState(false);

  const [loaded, error] = useFonts({
    PoppinsRegular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("../../../../assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={styles.heading1}>Trending {topic}</Text>
          <RecommendationCard data={firstData} housing={housing} />

          <View style={styles.secondHeader}>
            <Text style={styles.heading2}>All</Text>
            <View style={styles.filterBtn}>
              <TouchableOpacity
                style={styles.filterBtn}
                onPress={() => {
                  setVisible(!isVisible);
                }}
              >
                <Ionicons name="filter" size={24} color={LIGHT_BLUE} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.filterOptions}>
            {isVisible ? (
              categories.map((category, id) => (
                <FilterCategory category={category} key={id} />
              ))
            ) : (
              <></>
            )}
          </View>

          {otherData.map((data) => (
            <RecommendationCard key={data.id} data={data} housing={housing} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecommendationTemplate;
