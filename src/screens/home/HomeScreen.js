import { StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import { ImageBackground } from "react-native-web";
import TouchableOpacity from "react-native-web/dist/exports/TouchableOpacity";
import Image from "react-native-web/dist/exports/Image";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.melbourneBackpackText}>Melbourne Backpack</Text>
      <View style={styles.container}>
        <Text style={styles.subtitle}>Community</Text>
        <ImageBackground
          resizeMode={"cover"}
          source={require("../../../assets/images/community.jpg")}
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.subtitle}>Community</Text>
        <ImageBackground
          resizeMode={"cover"}
          source={require("../../../assets/images/community.jpg")}
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.subtitle}>Community</Text>
        <ImageBackground
          resizeMode={"cover"}
          source={require("../../../assets/images/community.jpg")}
          style={styles.backgroundImage}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
