import { Image, View, Text, TouchableOpacity, ScrollView } from "react-native";
import {
  Table,
  TableWrapper,
  Rows,
  Col,
  Row,
} from "react-native-table-component";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { GREY, WHITE } from "../../styles/colors";

const data = [
  {
    id: "1",
    name: "agagag",
    campus: "sgs",
    photo: "../../../assets/images/avatar-placeholder.jpg",
    facebook: "facebook.com/user/123235780432",
    bio: "abcdefghjdfafeffijfkadlsjfvalrwerwerwerdasddasdasdsadsadsadadsadsa",
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

const Profile = ({ route, navigation: { goBack } }) => {
  const id = route.params.id;
  return (
    <ScrollView style={styles.background}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={goBack}>
          <AntDesign
            name={"left"}
            size={24}
            color={WHITE}
            style={styles.backBtn}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
      </View>
      {data.map((user) => {
        if (user.id === id) {
          return (
            <View key={user.id}>
              <View style={styles.profileImageWrapper}>
                <Image
                  source={require("../../../assets/images/avatar-placeholder.jpg")}
                  style={styles.profileImage}
                />
              </View>
              {/*<View style={styles.userInfoGrid}>*/}
              {/*  <View>*/}
              {/*    <View style={styles.cellWrapper}>*/}
              {/*      <Text style={styles.userInfoHeading}>Display Name</Text>*/}
              {/*    </View>*/}
              {/*    <View style={styles.cellWrapper}>*/}
              {/*      <Text style={styles.userInfoHeading}>Campus</Text>*/}
              {/*    </View>*/}
              {/*    <View style={styles.cellWrapper}>*/}
              {/*      <Text style={styles.userInfoHeading}>Facebook link</Text>*/}
              {/*    </View>*/}
              {/*    <View style={styles.cellWrapper}>*/}
              {/*      <Text style={styles.userInfoHeading}>Bio</Text>*/}
              {/*    </View>*/}
              {/*  </View>*/}
              {/*  <View>*/}
              {/*    <View style={styles.cellWrapper}>*/}
              {/*      <Text style={styles.userInfo}>{user.name}</Text>*/}
              {/*    </View>*/}
              {/*    <View style={styles.cellWrapper}>*/}
              {/*      <Text style={styles.userInfo}>{user.campus}</Text>*/}
              {/*    </View>*/}
              {/*    <View style={styles.cellWrapper}>*/}
              {/*      <Text style={styles.userInfo}>{user.facebook}</Text>*/}
              {/*    </View>*/}
              {/*    <View style={styles.cellWrapper}>*/}
              {/*      <Text style={styles.userInfo}>{user.bio}</Text>*/}
              {/*    </View>*/}
              {/*  </View>*/}
              {/*</View>*/}

              <View>
                <Table style={styles.table}>
                  <Rows
                    data={[
                      ["Display Name", user.name],
                      ["Campus", user.campus],
                      ["Facebook", user.facebook],
                    ]}
                    flexArr={[1, 1.5]}
                    textStyle={styles.userInfo}
                    style={styles.row}
                  />
                  <Row
                    data={["Bio", user.bio]}
                    flexArr={[1, 1.5]}
                    textStyle={styles.userInfo}
                    style={[styles.row, styles.rowLast]}
                  />
                </Table>
              </View>
            </View>
          );
        }
      })}
    </ScrollView>
  );
};

export default Profile;
