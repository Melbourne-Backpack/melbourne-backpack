import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

const CommunityCardLarge = ({
  userID,
  name,
  picture,
  topic,
  campus,
  navigation,
}) => {
  return (
    <TouchableOpacity
      key={userID}
      style={styles.card}
      onPress={() => {
        navigation.navigate("Profile", {
          id: userID,
        });
      }}
    >
      <ImageBackground
        resizeMode={"cover"}
        source={{
          uri: picture,
        }}
        style={styles.userImg}
      >
        <View style={styles.userContent}>
          <Image style={styles.userContentBackground} />
          <View>
            <View style={styles.userContentRow}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userTopic}>{topic}</Text>
            </View>
            <View style={styles.userContentRow}>
              <Text style={styles.userCampus}>{campus}</Text>
              <TouchableOpacity style={styles.detailBtn}>
                <Text style={styles.detailBtnText}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CommunityCardLarge;
