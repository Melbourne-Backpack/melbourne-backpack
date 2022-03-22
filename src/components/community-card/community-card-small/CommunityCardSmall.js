import { Text, TouchableOpacity, ImageBackground, View } from "react-native";
import styles from "./styles";

const CommunityCardSmall = (props) => {
  return (
    <TouchableOpacity id={props.id} style={styles.card}>
      <ImageBackground
        resizeMode={"cover"}
        source={require("../../../../assets/images/avatar-placeholder.jpg")}
        style={styles.userImg}
      >
        <View style={styles.userContent}>
          <TouchableOpacity>
            <Text>{props.name}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CommunityCardSmall;
