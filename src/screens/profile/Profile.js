import { Image, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const data = [
  {
    id: "1",
    name: "agagag",
    campus: "sgs",
    photo: "../../../assets/images/avatar-placeholder.jpg",
    facebook: "facebook.com/user/123235",
    bio: "abcdefghjdfafeffijfkadlsjfvalrwerwerwer",
  },
  {
    id: "2",
    name: "bbbbb",
    campus: "sgs",
    photo: "../../../assets/images/avatar-placeholder.jpg",
    facebook: "facebook.com/user/124535",
    bio: "abcdefghjdfafeffijfkadlsjfvalrwerwerwer",
  },
  {
    id: "3",
    name: "ccccc",
    campus: "sgs",
    photo: "../../../assets/images/avatar-placeholder.jpg",
    facebook: "facebook.com/user/126235",
    bio: "abcdefghjdfafeffijfkadlsjfvalrwerwerwer",
  },
  {
    id: "4",
    name: "ddddd",
    campus: "sgs",
    photo: "../../../assets/images/avatar-placeholder.jpg",
    facebook: "facebook.com/user/123275",
    bio: "abcdefghjdfafeffijfkadlsjfvalrwerwerwer",
  },
];

const Profile = ({ route }) => {
  const id = route.params.id;
  return (
    <View>
      {data.map((user) => {
        if (user.id === id) {
          return (
            <View key={user.id}>
              <Image
                source={require("../../../assets/images/avatar-placeholder.jpg")}
                style={styles.profileImage}
              />
              <View>
                <Text>{user.name}</Text>
              </View>
              <View>
                <Text>{user.campus}</Text>
              </View>
              <View>
                <Text>{user.facebook}</Text>
              </View>
              <View>
                <Text>{user.bio}</Text>
              </View>
            </View>
          );
        }
      })}
    </View>
  );
};

export default Profile;
