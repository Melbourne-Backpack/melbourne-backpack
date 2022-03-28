import { SafeAreaView, ScrollView, Text, View } from "react-native";
import styles from "./styles";
import RecommendationCard from "../recommendation/RecommendationCard";
import { useFonts } from "expo-font";

const RecommendationTemplate = ({ topic, firstData, otherData, housing }) => {
  const [loaded, error] = useFonts({
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsMedium: require("../../../assets/fonts/Poppins-Medium.ttf"),
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
            <Text style={styles.subtitle}>See more</Text>
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
