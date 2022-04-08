import RecommendationTemplate from "../../components/recommendation/template/RecommendationTemplate";

const ShoppingScreen = () => {
  const data = [
    {
      id: 1,
      name: "South Melbourne Market",
      address: "322 - 326 Coventry St, Melbourne, Victoria 3205",
    },
    {
      id: 2,
      name: "Royal Arcade",
      address: "335 Bourke St, Melbourne, Victoria 3000",
    },
    {
      id: 3,
      name: "Emporium Melbourne",
      address: "287 Lonsdale St, Melbourne, Victoria 3000",
    },
    {
      id: 4,
      name: "Bourke Street Mall",
      address: "Bourke Street Jodhpur Rajasthan, Melbourne, Victoria 3000",
    },
  ];

  const firstData = data[0];
  const otherData = data.slice(1, data.length);

  const categories = ["Distance from RMIT"];

  return (
    <RecommendationTemplate
      data={data}
      topic="Shopping"
      categories={categories}
    />
  );
};

export default ShoppingScreen;
