import { Text, SafeAreaView, View, ScrollView } from "react-native";
import styles from "./styles";
import HousingCard from "../../components/recommendation/HousingCard";
import { LIGHT_PURPLE } from "../../styles/colors";
import SmallerHousingCard from "../../components/recommendation/SmallerHousingCard";

const HousingScreen = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "4 bedroom apartment - Dwell Student Housing",
      price: "250.00",
      rating: "3.5",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "2 bedroom apartment - Atira",
      price: "390.00",
      rating: "3.9",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Studio Deluxe - Urbanest Melbourne Central",
      price: "559.00",
      rating: "4.6",
    },
    {
      id: "ADKDWQKDQWK",
      title: "Go Junho",
    },
    {
      id: "HAHHHAHAHA",
      title: "Han Sooyoung",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.heading1}>Top Housing</Text>
        <HousingCard />

        <View style={styles.secondHeader}>
          <Text style={styles.heading2}>All</Text>
          <Text style={{ color: LIGHT_PURPLE }}>See more</Text>
        </View>

        <SmallerHousingCard />
      </View>
    </SafeAreaView>
  );
};
export default HousingScreen;
