import { SafeAreaView, ScrollView, Text, View } from "react-native";
import styles from "./styles";
import RecommendationCard from "../card/RecommendationCard";
import { useFonts } from "expo-font";
import HousingFilter from "../../housing-filter/HousingFilter";

const type = [
  {
    index: 0,
    name: "apartment",
  },
  {
    index: 1,
    name: "house",
  },
  {
    index: 2,
    name: "townhouse",
  },
];
const price = [
  {
    index: 0,
    name: "1-200",
  },
  {
    index: 1,
    name: "201-400",
  },
  {
    index: 2,
    name: "401-800",
  },
  {
    index: 3,
    name: "801-1600",
  },
  {
    index: 4,
    name: "1601+",
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
    name: "5+",
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
    name: "5+",
  },
];
const area = [
  {
    index: 0,
    name: "1-50",
  },
  {
    index: 1,
    name: "51-100",
  },
  {
    index: 2,
    name: "101-200",
  },
  {
    index: 3,
    name: "201-400",
  },
  {
    index: 4,
    name: "401+",
  },
];
const RecommendationTemplate = ({ topic, data, housing, navigation }) => {
  let highestRating = 0;
  let trendingCard = {};

  if (housing) {
    data.map((item) => {
      if (parseFloat(item.rating) > highestRating) {
        highestRating = parseFloat(item.rating);
        trendingCard = item;
      }
    });
  } else {
    trendingCard = data[0];
  }

  console.log(trendingCard);

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
          <RecommendationCard data={trendingCard} housing={housing} />

          <View style={styles.secondHeader}>
            <Text style={styles.heading2}>All</Text>
          </View>

          <View style={styles.filterOptions}>
            {housing ? (
              <HousingFilter
                headingList={["type", "price", "bedroom", "bathroom", "area"]}
                optionList={[type, price, bed, bath, area]}
                navigation={navigation}
                housingList={data}
                isHousing={true}
              />
            ) : (
              <HousingFilter
                headingList={[]}
                optionList={[]}
                navigation={navigation}
                housingList={data}
                isHousing={false}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecommendationTemplate;
