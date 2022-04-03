import { Text, View, ScrollView, FlatList, SafeAreaView } from "react-native";
import CommunityCardLarge from "../../components/community-card/community-card-large/CommunityCardLarge";
import CommunityFilter from "../../components/community-filter/CommunityFilter";
import styles from "./styles";
import data from "../../../assets/mockJSON/MOCK_DATA.json";

const CommunityScreen = ({ navigation }) => {
  const mostLikeYouMaxCards = 4;
  const self = "2";
  let mostLikeYouCount = 0;
  const mostLikeYouData = () => {
    let temp = [];
    let myCampus = "";
    let myTopic = [];
    data.map((user) => {
      let id = user.index;
      if (id.toString() === self.toString()) {
        myCampus = user.campus;
        myTopic = user.topic;
      }
    });

    for (let i = 0; i < data.length; i++) {
      let user = data[i];
      let id = user.index;

      if (
        id.toString() !== self.toString() &&
        user.campus === myCampus &&
        !temp.includes(id.toString())
      ) {
        temp.push(user);
        mostLikeYouCount++;
      }

      if (
        data.indexOf(user) === data.length - 1 &&
        temp.length !== mostLikeYouMaxCards
      ) {
        for (let i = 0; i < data.length; i++) {
          if (
            id.toString() !== self.toString() &&
            !temp.includes(id.toString())
          ) {
            myTopic.map((topic) => {
              if (user.topic.includes(topic)) {
                temp.push(user);
                mostLikeYouCount++;
              }
            });
          }
        }
      }

      if (mostLikeYouCount === mostLikeYouMaxCards) {
        break;
      }
    }
    return temp;
  };

  const mostLikeYouDataForDisplay = mostLikeYouData();
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
        <SafeAreaView>
          <FlatList
            style={styles.mostLikeYou}
            data={mostLikeYouDataForDisplay}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={(user) => {
              return (
                <CommunityCardLarge
                  userID={user.item.index}
                  name={user.item.name}
                  campus={user.item.campus}
                  picture={user.item.picture}
                  topic={user.item.topic[Math.floor(Math.random() * 2)]}
                  navigation={navigation}
                />
              );
            }}
          />
        </SafeAreaView>
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
