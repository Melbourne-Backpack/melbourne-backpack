import { Text, SafeAreaView } from "react-native";
import styles from "./styles";
import HousingCard from "../../components/recommendation/HousingCard";

const HousingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading1}>Trending Housing</Text>
      <HousingCard />
    </SafeAreaView>
  );
};
export default HousingScreen;
