import { Image, View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { WHITE } from "../../styles/colors";

const data = require("../../../assets/mockJSON/MOCK_DATA.json");

const Profile = ({ route, navigation: { goBack } }) => {
  const id = route.params.id;
  const self = "2";
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
        if (user.index.toString() === id.toString()) {
          return (
            <View key={user.id}>
              <View style={styles.profileImageWrapper}>
                <Image
                  source={{
                    uri: user.picture,
                  }}
                  style={styles.profileImage}
                />
              </View>
              <View style={styles.userContentDisplay}>
                <View style={styles.userContentRow}>
                  <View style={styles.userContentHeadingWrapper}>
                    <Text style={styles.userContentHeading}>Display Name</Text>
                  </View>
                  <View style={styles.userContentWrapper}>
                    <Text style={styles.userContent}>{user.name}</Text>
                  </View>
                </View>
                <View style={styles.userContentRow}>
                  <View style={styles.userContentHeadingWrapper}>
                    <Text style={styles.userContentHeading}>E-mail</Text>
                  </View>
                  <View style={styles.userContentWrapper}>
                    <Text style={styles.userContent}>{user.email}</Text>
                  </View>
                </View>
                <View style={styles.userContentRow}>
                  <View style={styles.userContentHeadingWrapper}>
                    <Text style={styles.userContentHeading}>Campus</Text>
                  </View>
                  <View style={styles.userContentWrapper}>
                    <Text style={styles.userContent}>{user.campus}</Text>
                  </View>
                </View>
                <View style={styles.userContentRow}>
                  <View style={styles.userContentHeadingWrapper}>
                    <Text style={styles.userContentHeading}>Interest in</Text>
                  </View>
                  <View style={styles.userContentWrapper}>
                    <Text style={styles.userContent}>
                      {user.topic.join(", ")}
                    </Text>
                  </View>
                </View>
                <View style={styles.userContentRow}>
                  <View style={styles.userContentHeadingWrapper}>
                    <Text style={styles.userContentHeading}>Date of Birth</Text>
                  </View>
                  <View style={styles.userContentWrapper}>
                    <Text style={styles.userContent}>
                      {user.dob.slice(0, 10)}
                    </Text>
                  </View>
                </View>
                <View style={styles.userContentRow}>
                  <View style={styles.userContentHeadingWrapper}>
                    <Text style={styles.userContentHeading}>Facebook Link</Text>
                  </View>
                  <View style={styles.userContentWrapper}>
                    <Text style={styles.userContent}>{user.facebook}</Text>
                  </View>
                </View>
                <View
                  style={[styles.userContentRow, styles.userContentLastRow]}
                >
                  <View style={styles.userContentHeadingWrapper}>
                    <Text style={styles.userContentHeading}>Bio</Text>
                  </View>
                  <View style={styles.userContentWrapper}>
                    <Text style={styles.userContent}>{user.bio}</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }
      })}
      {id.toString() === self.toString() ? (
        <View style={styles.logoutBtnWrapper}>
          <TouchableOpacity style={styles.logoutBtn}>
            <Text style={styles.logoutBtnText}>Logout</Text>
          </TouchableOpacity>
        </View>
      ) : (
        console.log("id: " + id + "self: " + self)
      )}
    </ScrollView>
  );
};

export default Profile;
