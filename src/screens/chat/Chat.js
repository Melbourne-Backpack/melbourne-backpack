import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { PLACEHOLDER, WHITE } from "../../styles/colors";

const Chat = ({ navigation }) => {
  const [loaded, error] = useFonts({
    PoppinsThin: require("../../../assets/fonts/Poppins-Thin.ttf"),
    PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../../../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.background}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={styles.topBar}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Community");
            }}
          >
            <AntDesign
              name={"left"}
              size={24}
              color={WHITE}
              style={styles.backBtn}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Chat now</Text>

          <TouchableOpacity style={styles.threeDots}>
            <Image
              source={require("../../../assets/three-dots.png")}
              style={{ width: 22, height: 22 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.secondTopBar}>
          <TouchableOpacity>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newWrapper}>
            <Image
              source={require("../../../assets/plus-icon.png")}
              style={{ width: 16, height: 16, marginLeft: 5 }}
            />
            <Text style={styles.newText}>New</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textInput}>
          <View style={styles.searchHolder}>
            <Image
              source={require("../../../assets/search-icon.png")}
              style={{ width: 16, height: 16, marginRight: 10 }}
            />
            <TextInput
              style={styles.searchText}
              placeholder={"Search"}
              placeholderTextColor={PLACEHOLDER}
            ></TextInput>
          </View>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/voice-icon.png")}
              style={{ width: 16, height: 16 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Chat;

//🇦🇺 🇦🇺
