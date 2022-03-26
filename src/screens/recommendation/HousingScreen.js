import { Text, SafeAreaView, View, ScrollView } from "react-native";
import styles from "./styles";
import RecommendationCard from "../../components/recommendation/RecommendationCard";
import { LIGHT_PURPLE } from "../../styles/colors";
import RecommendationScreen from "./RecommendationScreen";

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
      area: 38,
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
    <RecommendationScreen
      topic="Housing"
      firstData={firstData}
      otherData={otherData}
    />
  );
};
export default HousingScreen;
