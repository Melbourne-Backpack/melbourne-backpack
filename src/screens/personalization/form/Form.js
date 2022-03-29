import {
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { PLACEHOLDER } from "../../../styles/colors";

const Form = ({ navigation }) => {
  const [image, setImage] = useState(null);

  // Information
  const [fullName, setFullName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [facebook, setFacebook] = useState("");
  const [introduce, setIntroduce] = useState("");
  // handle font
  const [loaded, error] = useFonts({
    PoppinsSemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../../../../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={pickImage}>
            <View>
              <Image
                source={
                  image === null
                    ? require("../../../../assets/avatar-default.png")
                    : { uri: image }
                }
                style={styles.avatarImage}
              />
            </View>
            <View>
              <Text style={styles.avatarText}>Upload avatar</Text>
            </View>
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder={"Full Name"}
            placeholderTextColor={PLACEHOLDER}
            onChangeText={(newText) => setFullName(newText)}
            defaultValue={fullName}
          />
          <TextInput
            style={styles.textInput}
            placeholder={"Why are you using this app"}
            placeholderTextColor={PLACEHOLDER}
            onChangeText={(newText) => setPurpose(newText)}
            defaultValue={purpose}
          />
          <TextInput
            style={styles.textInput}
            placeholder={"Facebook Link"}
            placeholderTextColor={PLACEHOLDER}
            onChangeText={(newText) => setFacebook(newText)}
            defaultValue={facebook}
          />
          <TextInput
            style={[styles.textInput, styles.introduction]}
            placeholder={"Introduce yourself"}
            placeholderTextColor={PLACEHOLDER}
            onChangeText={(newText) => setIntroduce(newText)}
            defaultValue={introduce}
          />
          <View style={styles.textController}>
            <Text style={styles.normalText}>
              By summiting, you agree to our{" "}
            </Text>
            <Text style={styles.yellowText}>Terms, Data </Text>
            <Text style={styles.yellowText}>Policy </Text>
            <Text style={styles.normalText}>and </Text>
            <Text style={styles.yellowText}>Cookies Policy</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Ready")}>
            <View style={styles.nextButtonView}>
              <Text style={styles.nextButtonText}>Submit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Subject")}>
            <View style={styles.backButtonView}>
              <Text style={styles.backButtonText}>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Form;
