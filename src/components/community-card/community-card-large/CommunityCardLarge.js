import { Text, TouchableOpacity, ImageBackground, View } from "react-native";
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
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CommunityCardLarge;
