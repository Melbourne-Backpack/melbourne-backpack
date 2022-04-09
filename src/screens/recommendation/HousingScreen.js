import RecommendationTemplate from "../../components/recommendation/template/RecommendationTemplate";

const HousingScreen = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "4 bedroom apartment - Dwell Student Housing",
      price: "250.00",
      rating: "4.9",
      address: "250 Spencer Street, Melbourne, VIC 3000",
      area: 102,
      bedroom: 4,
      bathroom: 2,
      type: "apartment",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      name: "2 bedroom apartment - Atira",
      price: "390.00",
      rating: "3.9",
      address: "38 Carlton Street, Melbourne, VIC 3000",
      area: 50,
      bedroom: 2,
      bathroom: 1,
      type: "apartment",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      name: "Studio Deluxe - Urbanest Melbourne Central",
      price: "559.00",
      rating: "4.6",
      address: "599 Swanston St, Carlton VIC 3053",
      area: 38,
      bedroom: 1,
      bathroom: 1,
      type: "apartment",
    },
    {
      id: "ADKDWQKDQWK",
      name: "6 bedroom apartment - Iglu Melbourne",
      price: "299.00",
      rating: "4.1",
      address: "229 Franklin St, Melbourne VIC 3000",
      area: 120,
      bedroom: 6,
      bathroom: 4,
      type: "apartment",
    },
  ];

  const categories = ["Type", "Price", "Distance from RMIT"];

  return (
    <RecommendationTemplate
      topic="Housing"
      data={DATA}
      housing={true}
      categories={categories}
    />
  );
};
export default HousingScreen;
