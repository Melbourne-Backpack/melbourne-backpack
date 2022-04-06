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
// import storage from "@react-native-firebase/storage";
import Dropdown from "../../../components/dropdown/Dropdown";

let data = ["Exchange", "Transfer", "Get Information"];

const Form = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [imageObject, setImageObject] = useState({});
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  // Information
  const [fullName, setFullName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [facebook, setFacebook] = useState("");
  const [bio, setBio] = useState("");

  const [fullNameValidate, setFullNameValidate] = useState({
    error: "",
    valid: false,
  });
  const [purposeValidate, setPurposeValidate] = useState({
    error: "",
    valid: false,
  });
  const [facebookValidate, setFacebookValidate] = useState({
    error: "",
    valid: false,
  });
  const [bioValidate, setBioValidate] = useState({ error: "", valid: false });
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

  const uploadImage = async () => {
    if (image == null) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf("/") + 1);

    // Add timestamp to File Name
    const extension = filename.split(".").pop();
    const name = filename.split(".").slice(0, -1).join(".");
    filename = name + Date.now() + "." + extension;

    setUploading(true);
    setTransferred(0);

    const storageRef = storage().ref(`photos/${filename}`);
    const task = storageRef.putFile(uploadUri);

    // Set transferred state
    task.on("state_changed", (taskSnapshot) => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`
      );

      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100
      );
    });

    try {
      await task;

      const url = await storageRef.getDownloadURL();

      setUploading(false);
      setImage(null);

      // Alert.alert(
      //   'Image uploaded!',
      //   'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
      // );
      return url;
    } catch (e) {
      console.log(e);
      return null;
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

  const checkValidate = (component) => {
    if (component === fullName && fullName === "") {
      setFullNameValidate({ error: "*Full name is required", valid: false });
    } else {
      setFullNameValidate({ error: "", valid: true });
    }

    if (component === purpose && purpose === "") {
      setPurposeValidate({ error: "*Purpose is required", valid: false });
    } else {
      setPurposeValidate({ error: "", valid: true });
    }
    if (component === facebook && facebook === "") {
      setFacebookValidate({
        error: "*Facebook link is required",
        valid: false,
      });
    } else {
      setFacebookValidate({ error: "", valid: true });
    }
    if (component === bio && bio === "") {
      setBioValidate({ error: "*Introduction is required", valid: false });
    } else {
      setBioValidate({ error: "", valid: true });
    }
  };

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
              onChangeText={(text) => {
                setFullName(text);
              }}
              defaultValue={fullName}
            />
            <View style={styles.errorHolder}>
              <Text style={styles.error}>{fullNameValidate.error}</Text>
            </View>

            <Dropdown
              data={data}
              onSelected={onSelected}
              value={selectedItem}
            />
            <View style={styles.errorHolder}>
              <Text style={styles.error}>{purposeValidate.error}</Text>
            </View>

            <TextInput
              style={styles.textInput}
              placeholder={"Facebook Link"}
              placeholderTextColor={PLACEHOLDER}
              onChangeText={(text) => {
                setFacebook(text);
              }}
              defaultValue={facebook}
            />
            <View style={styles.errorHolder}>
              <Text style={styles.error}>{facebookValidate.error}</Text>
            </View>

            <TextInput
              style={[styles.textInput, styles.introduction]}
              placeholder={"Introduce yourself"}
              placeholderTextColor={PLACEHOLDER}
              onChangeText={(text) => {
                setBio(text);
              }}
              defaultValue={bio}
            />
            <View style={styles.errorHolder}>
              <Text style={styles.error}>{bioValidate.error}</Text>
            </View>

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
                  purpose,
                  facebook,
                  bio
                );
                uploadImage(image);
                checkValidate(fullName);
                checkValidate(facebook);
                checkValidate(bio);
                if (
                  fullNameValidate.valid &&
                  purposeValidate.valid &&
                  facebookValidate.valid &&
                  bioValidate.valid === true
                ) {
                  navigation.navigate("Ready");
                }
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
