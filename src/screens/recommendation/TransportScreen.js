import RecommendationTemplate from "../../components/recommendation/template/RecommendationTemplate";

const TransportScreen = () => {
  const data = [
    {
      id: 1,
      name: "Cranbourne Line",
      address:
        "Departure: Cranbourne Railway Station, Station St, Cranbourne 3977",
    },
    {
      id: 2,
      name: "Bus 234",
      address: "Departure: 11 Centre Ave, Port Melbourne VIC 3207",
    },
    {
      id: 3,
      name: "Yarra Trams line 16",
      address: "Melbourne University, Swanston St #1, Carlton VIC 3053",
    },
    {
      id: 4,
      name: "Pakenham Line",
      address: "Railway Ave & Henry Rd, Pakenham VIC 3810",
    },
  ];

  const firstData = data[0];
  const otherData = data.slice(1, data.length);

  const categories = ["Distance from RMIT"];

  return (
    <RecommendationTemplate
      data={data}
      topic="Transportation"
      categories={categories}
    />
  );
};

export default TransportScreen;
