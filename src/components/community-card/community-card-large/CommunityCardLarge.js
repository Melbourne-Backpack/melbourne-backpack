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
        <ImageBackground
          style={styles.userContent}
          blurRadius={90}
          source={require("../../../../assets/images/white-background.png")}
          imageStyle={{ borderRadius: 20 }}
        >
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
        </ImageBackground>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CommunityCardLarge;
