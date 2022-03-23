import { Text, SafeAreaView, View } from "react-native";
import styles from "./styles";
import HousingCard from "../../components/recommendation/HousingCard";
import { LIGHT_PURPLE } from "../../styles/colors";

const HousingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.heading1}>Trending Housing</Text>
        <HousingCard />

        <View style={styles.secondHeader}>
          <Text style={styles.heading2}>Most popular</Text>
          <Text style={{ color: LIGHT_PURPLE }}>See more</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HousingScreen;
