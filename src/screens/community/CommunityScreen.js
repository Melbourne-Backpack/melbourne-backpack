import { Text, View } from "react-native";
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
      photo: "",
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
    <View>
      <View>
        <Text>Most like you</Text>
        <View style={styles.mostLikeYou}>
          {mostLikeYouArray.map((user) => {
            return (
              <CommunityCardLarge
                id={user.id}
                name={user.name}
                campus={user.campus}
              />
            );
          })}
        </View>
      </View>
      <View>
        <Text>Community</Text>
        <View style={styles.communityList}>
          {others.map((user) => {
            return <CommunityCardSmall id={user.id} name={user.name} />;
          })}
        </View>
      </View>
    </View>
  );
};

export default CommunityScreen;
