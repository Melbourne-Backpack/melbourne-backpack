import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import CommunityCardLarge from "../../components/community-card/community-card-large/CommunityCardLarge";
import CommunityCardSmall from "../../components/community-card/community-card-small/CommunityCardSmall";
import CommunityFilter from "../../components/community-filter/CommunityFilter";
import styles from "./styles";

const CommunityScreen = ({ navigation }) => {
  const data = require("../../../assets/mockJSON/MOCK_DATA.json");
  const campus = [
    {
      id: 1,
      name: "SGS campus",
    },
    {
      id: 2,
      name: "Hanoi campus",
    },
    {
      id: 3,
      name: "Danang campus",
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

  console.log(data);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.mostLikeYouContainer}>
        <Text style={styles.mostLikeYouText}>Most like you</Text>
        <ScrollView
          style={styles.mostLikeYou}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {data.map((user) => {
            return (
              <CommunityCardLarge
                userID={user.index}
                name={user.name}
                campus={user.campus}
                picture={user.picture}
                topic={"IT"}
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
            headings={["Campus", "Topic"]}
            options={[campus, topic]}
          />
        </View>
        <View style={styles.communityList}>
          {data.map((user) => {
            return (
              <CommunityCardSmall
                userID={user.index}
                name={user.name}
                picture={user.picture}
                navigation={navigation}
              />
            );
          })}
        </View>
        <View style={styles.seeMoreBtnContainer}>
          <TouchableOpacity>
            <Text style={styles.seeMoreBtn}>See more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CommunityScreen;
