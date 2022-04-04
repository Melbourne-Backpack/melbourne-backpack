import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { YELLOW } from "../../styles/colors";

const HomeScreen = ({ navigation }) => {
  // handle font
  const [loaded, error] = useFonts({
    PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../../../assets/fonts/Poppins-Medium.ttf"),
    PoppinsBold: require("../../../assets/fonts/Poppins-Bold.ttf"),
    PoppinsExtraBold: require("../../../assets/fonts/Poppins-ExtraBold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.melbourneBackpackText}>Melbourne Backpack</Text>
      <View style={styles.furtherButton}>
        <TouchableOpacity activeOpacity={0.5}>
          <ImageBackground
            resizeMode={"cover"}
            source={require("../../../assets/images/community.jpg")}
            style={styles.backgroundImage}
            imageStyle={{ borderRadius: 20 }}
            onPress={() => navigation.navigate("Community")}
          >
            <View style={styles.overlay}>
              <Text style={styles.subtitle}>Community</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.furtherButton}>
        <TouchableOpacity activeOpacity={0.5}>
          <ImageBackground
            resizeMode={"cover"}
            source={require("../../../assets/images/housing.jpg")}
            style={styles.backgroundImage}
            imageStyle={{ borderRadius: 20 }}
            onPress={() => navigation.navigate("Housing")}
          >
            <View style={styles.overlay}>
              <Text style={styles.subtitle}>Housing</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.furtherButton}>
        <TouchableOpacity activeOpacity={0.5}>
          <ImageBackground
            resizeMode={"cover"}
            source={require("../../../assets/images/shopping.jpg")}
            style={styles.backgroundImage}
            imageStyle={{ borderRadius: 20 }}
            onPress={() => navigation.navigate("Shopping")}
          >
            <View style={styles.overlay}>
              <Text style={styles.subtitle}>Shopping</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.furtherButton}>
        <TouchableOpacity activeOpacity={0.5}>
          <ImageBackground
            resizeMode={"cover"}
            source={require("../../../assets/images/transport.jpg")}
            style={styles.backgroundImage}
            imageStyle={{ borderRadius: 20 }}
          >
            <View style={styles.overlay}>
              <Text style={styles.subtitle}>Transport</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.furtherButton}>
        <TouchableOpacity activeOpacity={0.5}>
          <ImageBackground
            resizeMode={"cover"}
            source={require("../../../assets/images/profile.jpg")}
            style={styles.backgroundImage}
            imageStyle={{ borderRadius: 20 }}
            onPress={() => navigation.navigate("Profile")}
          >
            <View style={styles.overlay}>
              <Text style={styles.subtitle}>Profile</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
