import { Text, View, ScrollView } from "react-native";
import CommunityCardLarge from "../../components/community-card/community-card-large/CommunityCardLarge";
import CommunityFilter from "../../components/community-filter/CommunityFilter";
import styles from "./styles";

const CommunityScreen = ({ navigation }) => {
  const data = require("../../../assets/mockJSON/MOCK_DATA.json");
  const mostLikeYouMaxCards = 4;
  const mostLikeYouData = data.slice(0, mostLikeYouMaxCards);
  const campus = [
    {
      id: 1,
      name: "SGS Campus",
    },
    {
      id: 2,
      name: "Hanoi Campus",
    },
    {
      id: 3,
      name: "Danang Campus",
    },
  ];

  const topic = [
    {
      id: 1,
      name: "Economics",
    },
    {
      id: 2,
      name: "Business",
    },
    {
      id: 3,
      name: "Robotics",
    },
    {
      id: 4,
      name: "Management",
    },
    {
      id: 5,
      name: "Aviation",
    },
    {
      id: 6,
      name: "Education",
    },
    {
      id: 7,
      name: "Design",
    },
    {
      id: 8,
      name: "Prof Com",
    },
    {
      id: 9,
      name: "Technology",
    },
    {
      id: 10,
      name: "Digital Marketing",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.mostLikeYouContainer}>
        <Text style={styles.mostLikeYouText}>Most like you</Text>
        <ScrollView
          style={styles.mostLikeYou}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {mostLikeYouData.map((user) => {
            return (
              <CommunityCardLarge
                userID={user.index}
                name={user.name}
                campus={user.campus}
                picture={user.picture}
                topic={user.topic[Math.floor(Math.random() * 2)]}
                navigation={navigation}
              />
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.communityListContainer}>
        <Text style={styles.communityListText}>Community</Text>
        <View>
          <CommunityFilter
            headingList={["campus", "topic"]}
            optionList={[campus, topic]}
            navigation={navigation}
            userList={data}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CommunityScreen;
