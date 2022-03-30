import { Image, View, Text, TouchableOpacity } from "react-native";

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
  console.log(route);
  const id = 2;
  const self = 2;
  return (
    <View>
      {data.map((user) => {
        if (user.id === id.toString()) {
          return (
            <View key={user.id}>
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
