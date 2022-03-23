import {
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  Image,
} from "react-native";
import styles from "./styles";

const CommunityCardLarge = (props) => {
  return (
    <TouchableOpacity id={props.id} style={styles.card}>
      <ImageBackground
        resizeMode={"cover"}
        source={require("../../../../assets/images/avatar-placeholder.jpg")}
        style={styles.userImg}
      >
        <View style={styles.userContent}>
          <Image style={styles.userContentBackground} />
          <View>
            <View style={styles.userContentRow}>
              <Text style={styles.userName}>{props.name}</Text>
              <Text style={styles.userTopic}>IT</Text>
            </View>
            <View style={styles.userContentRow}>
              <Text style={styles.userCampus}>{props.campus}</Text>
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
