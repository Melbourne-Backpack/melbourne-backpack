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
import CommunityFilter from "../../community-filter/CommunityFilter";
import data from "../../../../assets/mockJSON/MOCK_DATA.json";
import HousingFilter from "../../housing-filter/HousingFilter";

const housingHeading = ["type", "price", "bed", "bath", "area"];
const type = [
  {
    index: 0,
    name: "Apartment",
  },
  {
    index: 1,
    name: "House",
  },
  {
    index: 2,
    name: "Townhouse",
  },
];
const price = [
  {
    index: 0,
    name: "<200",
  },
  {
    index: 1,
    name: "<400",
  },
  {
    index: 2,
    name: "<800",
  },
  {
    index: 3,
    name: "<1600",
  },
  {
    index: 4,
    name: "1600+",
  },
];
const bed = [
  {
    index: 0,
    name: "1",
  },
  {
    index: 1,
    name: "2",
  },
  {
    index: 2,
    name: "3",
  },
  {
    index: 3,
    name: "4",
  },
  {
    index: 4,
    name: "4+",
  },
];
const bath = [
  {
    index: 0,
    name: "1",
  },
  {
    index: 1,
    name: "2",
  },
  {
    index: 2,
    name: "3",
  },
  {
    index: 3,
    name: "4",
  },
  {
    index: 4,
    name: "4+",
  },
];
const area = [
  {
    index: 0,
    name: "<50",
  },
  {
    index: 1,
    name: "<100",
  },
  {
    index: 2,
    name: "<200",
  },
  {
    index: 3,
    name: "<400",
  },
  {
    index: 4,
    name: "400+",
  },
];
const RecommendationTemplate = ({
  topic,
  firstData,
  otherData,
  housing,
  categories,
  navigation,
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
          </View>

          <View style={styles.filterOptions}>
            {housing ? (
              <HousingFilter
                headingList={housingHeading}
                optionList={[type, price, bed, bath, area]}
                navigation={navigation}
                housingList={otherData}
              />
            ) : null}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecommendationTemplate;
