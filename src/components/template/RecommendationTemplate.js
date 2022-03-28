import { SafeAreaView, ScrollView, Text, View } from "react-native";
import styles from "./styles";
import RecommendationCard from "../recommendation/RecommendationCard";
import { LIGHT_PURPLE } from "../../styles/colors";

const RecommendationTemplate = ({ topic, firstData, otherData, housing }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={styles.heading1}>Trending {topic}</Text>
          <RecommendationCard data={firstData} housing={housing} />

          <View style={styles.secondHeader}>
            <Text style={styles.heading2}>All</Text>
            <Text style={{ color: LIGHT_PURPLE }}>See more</Text>
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
