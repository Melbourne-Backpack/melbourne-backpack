import { SafeAreaView, ScrollView, Text, View } from "react-native";
import styles from "./styles";
import RecommendationCard from "../../components/recommendation/RecommendationCard";
import { LIGHT_PURPLE } from "../../styles/colors";

const RecommendationScreen = ({ topic, firstData, otherData }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={styles.heading1}>Top {topic}</Text>
          <RecommendationCard data={firstData} />

          <View style={styles.secondHeader}>
            <Text style={styles.heading2}>All</Text>
            <Text style={{ color: LIGHT_PURPLE }}>See more</Text>
          </View>

          {otherData.map((data) => (
            <RecommendationCard key={data.id} data={data} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecommendationScreen;
