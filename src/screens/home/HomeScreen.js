import { StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import { ImageBackground } from "react-native-web";
import TouchableOpacity from "react-native-web/dist/exports/TouchableOpacity";
import Image from "react-native-web/dist/exports/Image";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.melbourneBackpackText}>Melbourne Backpack</Text>
      <Text style={styles.subtitle}>Community</Text>
      <View style={styles.container}>
        <ImageBackground
          resizeMode={"cover"}
          source={require("../../../assets/images/community.jpg")}
          style={styles.backgroundImage}
        >
          <View>
            <TouchableOpacity style={styles.furtherButton}>
              <Image source={require("../../../assets/images/community.jpg")} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default HomeScreen;
