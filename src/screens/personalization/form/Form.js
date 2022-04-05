import {
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { PLACEHOLDER } from "../../../styles/colors";
import { pushData } from "../../../api/handleData";
import { auth } from "../../../config/firebase";
import Dropdown from "../../../components/dropdown/Dropdown";

let data = ["Exchange", "Transfer", "Get Information"];

const Form = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [imageObject, setImageObject] = useState({});

  // Information
  const [fullName, setFullName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [facebook, setFacebook] = useState("");
  const [bio, setBio] = useState("");
  const [hasPermission, setHasPermission] = useState(null);

  const [selectedItem, setSelectedItem] = useState(null);

  const onSelected = (item) => {
    setSelectedItem(item);
    setPurpose(item);
  };
  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasPermission(galleryStatus.status === "granted");
    })();
  }, []);

  const pickImage = async () => {
    if (hasPermission === false) {
      window.alert(
        "No permission! Go to settings and allow Melbourne Backpack to access your library."
      );
    } else {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      // console.log(result);

      if (!result.cancelled) {
        setImage(result.uri);
        setImageObject(result);
      }
    }
  };

  // handle font
  const [loaded, error] = useFonts({
    PoppinsSemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../../../../assets/fonts/Poppins-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
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
              onChangeText={(text) => setFullName(text)}
              defaultValue={fullName}
            />

            <Dropdown
              data={data}
              onSelected={onSelected}
              value={selectedItem}
            />
            <TextInput
              style={styles.textInput}
              placeholder={"Facebook Link"}
              placeholderTextColor={PLACEHOLDER}
              onChangeText={(text) => setFacebook(text)}
              defaultValue={facebook}
            />
            <TextInput
              style={[styles.textInput, styles.introduction]}
              placeholder={"Introduce yourself"}
              placeholderTextColor={PLACEHOLDER}
              onChangeText={(text) => setBio(text)}
              defaultValue={bio}
            />
            <View style={styles.textController}>
              <Text style={styles.normalText}>
                By submitting, you agree to our{" "}
              </Text>
              <Text style={styles.yellowText}>Terms, Data </Text>
              <Text style={styles.yellowText}>Policy </Text>
              <Text style={styles.normalText}>and </Text>
              <Text style={styles.yellowText}>Cookies Policy</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                pushData(
                  auth.currentUser?.uid,
                  auth.currentUser?.email,
                  fullName,
                  imageObject,
                  purpose,
                  facebook,
                  bio
                );
                navigation.navigate("Ready");
              }}
            >
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
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Form;
