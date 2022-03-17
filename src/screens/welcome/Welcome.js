import {
  Button,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styles from "./styles";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.firstText}>Welcome !</Text>
      <Text style={styles.secondText}>
        Find what {"\n"}you are {"\n"}looking for
      </Text>
      <Text style={styles.thirdText}>
        By personalize your account, we can help you to find what you like.
      </Text>
      <TouchableOpacity onPress={() => console.log("Hello")}>
        <View style={styles.viewButton}>
          <Text style={styles.textButton}>Personalize your account</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

//🇦🇺 🇦🇺
