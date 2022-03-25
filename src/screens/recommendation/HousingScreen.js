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
      rating: "4.9",
      address: "250 Spencer Street, Melbourne, VIC 3000",
      area: 102,
      bedroom: 4,
      bathroom: 2,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "2 bedroom apartment - Atira",
      price: "390.00",
      rating: "3.9",
      address: "38 Carlton Street, Melbourne, VIC 3000",
      area: 50,
      bedroom: 2,
      bathroom: 1,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Studio Deluxe - Urbanest Melbourne Central",
      price: "559.00",
      rating: "4.6",
      address: " 599 Swanston St, Carlton VIC 3053",
      area: 50,
      bedroom: 1,
      bathroom: 1,
    },
    {
      id: "ADKDWQKDQWK",
      title: "6 bedroom apartment - Iglu Melbourne",
      price: "299.00",
      rating: "4.1",
      address: "229 Franklin St, Melbourne VIC 3000",
      area: 120,
      bedroom: 6,
      bathroom: 4,
    },
  ];

  const firstData = DATA[0];
  const otherData = DATA.slice(1, DATA.length);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={styles.heading1}>Top Housing</Text>
          <HousingCard
            title={firstData.title}
            price={firstData.price}
            rating={firstData.rating}
            address={firstData.address}
            area={firstData.area}
            bedroom={firstData.bedroom}
            bathroom={firstData.bathroom}
          />

          <View style={styles.secondHeader}>
            <Text style={styles.heading2}>All</Text>
            <Text style={{ color: LIGHT_PURPLE }}>See more</Text>
          </View>

          {otherData.map((data) => (
            <HousingCard
              title={data.title}
              price={data.price}
              rating={data.rating}
              address={data.address}
              area={data.area}
              bedroom={data.bedroom}
              bathroom={data.bathroom}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HousingScreen;
