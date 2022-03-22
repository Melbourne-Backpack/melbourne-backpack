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
      <View style={styles.wrapper}>
        <Text style={styles.firstText}>Welcome to Melbourne Backpack!</Text>
        <Text style={styles.secondText}>Customize{"\n"}Your Needs</Text>
        <Text style={styles.thirdText}>
          Tell us who you are to get the best {"\n"}experiences.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => console.log("Hello")}>
            <View style={styles.viewButton}>
              <Text style={styles.textButton}>Personalize your account</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

//🇦🇺 🇦🇺
