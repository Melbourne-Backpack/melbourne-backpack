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
          <Text>{props.name}</Text>
          <Text>{props.campus}</Text>
          <TouchableOpacity style={styles.detailBtn}>
            <Text>Details</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CommunityCardLarge;
