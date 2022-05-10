import { Text, View, ImageBackground, ScrollView } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

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
      <ScrollView>
        <View style={styles.furtherButton}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Discover")}
          >
            <ImageBackground
              resizeMode={"cover"}
              source={{
                uri: "https://www.amec.com.vn/wp-content/uploads/2020/09/CS-RMIT.jpg",
              }}
              style={styles.backgroundImage}
              imageStyle={{ borderRadius: 20 }}
            >
              <View style={styles.overlay}>
                <Text style={styles.subtitle}>Discovery</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.furtherButton}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("Content", { screen: "Community" })
            }
          >
            <ImageBackground
              resizeMode={"cover"}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/melbourne-backpack.appspot.com/o/home-images%2Fcommunity.jpg?alt=media&token=88f9eae7-faf6-4b47-b149-875ba1b9baf8",
              }}
              style={styles.backgroundImage}
              imageStyle={{ borderRadius: 20 }}
            >
              <View style={styles.overlay}>
                <Text style={styles.subtitle}>Community</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.furtherButton}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("Content", { screen: "Housing" })
            }
          >
            <ImageBackground
              resizeMode={"cover"}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/melbourne-backpack.appspot.com/o/home-images%2Fhousing.jpg?alt=media&token=54e5cee1-af9d-4990-b79f-3ebe315111a6",
              }}
              style={styles.backgroundImage}
              imageStyle={{ borderRadius: 20 }}
            >
              <View style={styles.overlay}>
                <Text style={styles.subtitle}>Housing</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.furtherButton}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("Content", { screen: "Shopping" })
            }
          >
            <ImageBackground
              resizeMode={"cover"}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/melbourne-backpack.appspot.com/o/home-images%2Fshopping.jpg?alt=media&token=a2d0efdd-202c-4b08-bf6f-df9c6b423736",
              }}
              style={styles.backgroundImage}
              imageStyle={{ borderRadius: 20 }}
            >
              <View style={styles.overlay}>
                <Text style={styles.subtitle}>Shopping</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.furtherButton}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("Content", { screen: "Transport" })
            }
          >
            <ImageBackground
              resizeMode={"cover"}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/melbourne-backpack.appspot.com/o/home-images%2Ftransport.jpg?alt=media&token=79dad028-f372-4bba-b331-a86e85a9ffe2",
              }}
              style={styles.backgroundImage}
              imageStyle={{ borderRadius: 20 }}
            >
              <View style={styles.overlay}>
                <Text style={styles.subtitle}>Transport</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={styles.furtherButtonLast}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("Content", { screen: "Profile" })
            }
          >
            <ImageBackground
              resizeMode={"cover"}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/melbourne-backpack.appspot.com/o/home-images%2Fprofile.jpg?alt=media&token=062b66b7-c655-48d4-99d1-2d6105e7a230",
              }}
              style={styles.backgroundImage}
              imageStyle={{ borderRadius: 20 }}
            >
              <View style={styles.overlay}>
                <Text style={styles.subtitle}>Profile</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
