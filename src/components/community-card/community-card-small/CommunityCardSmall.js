import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
            <Image styles={styles.userContentBackground} />
            <View style={styles.userNameScroll}>
              <Text style={styles.userName}>{props.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CommunityCardSmall;
