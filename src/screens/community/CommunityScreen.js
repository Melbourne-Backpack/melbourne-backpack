import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import CommunityCardLarge from "../../components/community-card/community-card-large/CommunityCardLarge";
import CommunityCardSmall from "../../components/community-card/community-card-small/CommunityCardSmall";
import styles from "./styles";

const CommunityScreen = () => {
  const [mostLikeYouArray, setMostLikeYouArray] = useState([
    {
      id: "1",
      name: "aaaaaa",
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

  return (
    <ScrollView style={styles.container}>
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
                id={user.id}
                name={user.name}
                campus={user.campus}
              />
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.communityListContainer}>
        <Text style={styles.communityListText}>Community</Text>
        <View style={styles.communityList}>
          {others.map((user) => {
            return <CommunityCardSmall id={user.id} name={user.name} />;
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
