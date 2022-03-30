import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import CommunityCardLarge from "../../components/community-card/community-card-large/CommunityCardLarge";
import CommunityCardSmall from "../../components/community-card/community-card-small/CommunityCardSmall";
import CommunityFilter from "../../components/community-filter/CommunityFilter";
import styles from "./styles";

const CommunityScreen = ({ navigation }) => {
  const [mostLikeYouArray, setMostLikeYouArray] = useState([
    {
      id: "1",
      name: "agagag",
      campus: "sgs",
      photo: "../../../assets/images/avatar-placeholder.jpg",
    },
    {
      id: "2",
      name: "bbbbb",
      campus: "sgs",
      photo: "",
    },
    {
      id: "3",
      name: "ccccc",
      campus: "sgs",
      photo: "",
    },
    {
      id: "4",
      name: "ddddd",
      campus: "sgs",
      photo: "",
    },
  ]);

  const [others, setOthers] = useState([
    {
      id: "5",
      name: "ababab",
      campus: "sgs",
      photo: "",
    },
    {
      id: "6",
      name: "bcbcbc",
      campus: "sgs",
      photo: "",
    },
    {
      id: "7",
      name: "cdcdcd",
      campus: "sgs",
      photo: "",
    },
    {
      id: "8",
      name: "acacac",
      campus: "sgs",
      photo: "",
    },
    {
      id: "9",
      name: "bdbdbd",
      campus: "sgs",
      photo: "",
    },
    {
      id: "10",
      name: "cececece",
      campus: "sgs",
      photo: "",
    },
    {
      id: "11",
      name: "afafaf",
      campus: "sgs",
      photo: "",
    },
    {
      id: "12",
      name: "bgbgbg",
      campus: "sgs",
      photo: "",
    },
  ]);
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
      name: "Professional Communication",
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
          {mostLikeYouArray.map((user) => {
            return (
              <CommunityCardLarge
                userID={user.id}
                name={user.name}
                campus={user.campus}
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
          {others.map((user) => {
            return (
              <CommunityCardSmall
                userID={user.id}
                name={user.name}
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
