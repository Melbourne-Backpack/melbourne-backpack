import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
  Pressable,
  RefreshControl,
} from "react-native";
import styles from "./styles";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { LIGHT_PURPLE, PURPLE_BLUE, WHITE } from "../../styles/colors";

import { auth, db } from "../../config/firebase";
import { useCallback, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useFonts } from "expo-font";
import AlertModal from "../../components/alert-modal/AlertModal";
import { SafeAreaView } from "react-native-web";

// const data = require("../../../assets/mockJSON/MOCK_DATA.json");

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Profile = ({ navigation, route }) => {
  const [data, setData] = useState({});
  const [currentDocId, setCurrentDocId] = useState("");

  const [showAlert, setShowAlert] = useState(false);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const getCurrentUserData = () => {
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists()) {
        setData(docSnap.data());
        setCurrentDocId(docSnap.id);
      } else {
        console.log("No such document!");
      }
    });
  };

  const getCurrentUserDataOnRefresh = () => {
    getDoc(
      doc(
        db,
        "users",
        navigation.getParent() ? auth.currentUser.uid : route.params.user
      )
    ).then((docSnap) => {
      if (docSnap.exists()) {
        setData(docSnap.data());
        setCurrentDocId(docSnap.id);
        onRefresh();
      } else {
        console.log("No such document!");
      }
    });
  };

  const getOtherUserData = () => {
    getDoc(doc(db, "users", route.params.user)).then((docSnap) => {
      if (docSnap.exists()) {
        setData(docSnap.data());
        setCurrentDocId(docSnap.id);
      } else {
        console.log("No such document!");
      }
    });
  };
  useEffect(() => {
    if (navigation.getParent()) getCurrentUserData();
    else getOtherUserData();
  }, []);
  const [loaded, error] = useFonts({
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../../../assets/fonts/Poppins-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  const setShowAlertFunction = (showAlert) => {
    setShowAlert(showAlert);
  };

  const signOut = ({ navigation }) => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("SignIn");
      })
      .catch((error) => window.alert(error.message));
  };

  return (
    <View style={styles.background}>
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
        <Text style={styles.title}>Profile</Text>

        <TouchableOpacity
          style={styles.messenger}
          onPress={() => {
            navigation.navigate("Chat");
          }}
        >
          <Ionicons name="chatbubble-ellipses" size={27} color={WHITE} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={getCurrentUserDataOnRefresh}
            style={styles.refreshing}
            title={"Refreshing"}
            titleColor={WHITE}
          />
        }
      >
        <View style={styles.profileImageWrapper}>
          <Image
            source={{
              uri: data.avatar,
            }}
            style={styles.profileImage}
          />
          <TouchableOpacity
            style={styles.editProfile}
            onPress={() => {
              navigation.navigate("EditProfile");
            }}
          >
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.userContentDisplay}>
          <AlertModal
            navigation={navigation}
            showModal={showAlert}
            setShowModalFunction={setShowAlertFunction}
            message={"Are you sure you want to log out?"}
            icon={"logout"}
            doNavigate={true}
            toPage={"SignIn"}
            signOut={signOut}
          />
          <View style={styles.userContentRow}>
            <View style={styles.userContentHeadingWrapper}>
              <Text style={styles.userContentHeading}>Display Name</Text>
            </View>
            <View style={styles.userContentWrapper}>
              <Text style={styles.userContent}>{data.fullName}</Text>
            </View>
          </View>
          <View style={styles.userContentRow}>
            <View style={styles.userContentHeadingWrapper}>
              <Text style={styles.userContentHeading}>Date of birth</Text>
            </View>
            <View style={styles.userContentWrapper}>
              <Text style={styles.userContent}>{data.dob}</Text>
            </View>
          </View>
          <View style={styles.userContentRow}>
            <View style={styles.userContentHeadingWrapper}>
              <Text style={styles.userContentHeading}>E-mail</Text>
            </View>
            <View style={styles.userContentWrapper}>
              <Text style={styles.userContent}>{data.email}</Text>
            </View>
          </View>
          <View style={styles.userContentRow}>
            <View style={styles.userContentHeadingWrapper}>
              <Text style={styles.userContentHeading}>Campus</Text>
            </View>
            <View style={styles.userContentWrapper}>
              <Text style={styles.userContent}>{data.campus}</Text>
            </View>
          </View>
          <View style={styles.userContentRow}>
            <View style={styles.userContentHeadingWrapper}>
              <Text style={styles.userContentHeading}>Interest in</Text>
            </View>
            <View style={styles.userContentWrapper}>
              <Text style={styles.userContent}>
                {data.subjects && data.subjects.join(" | ")}
              </Text>
            </View>
          </View>
          <View style={styles.userContentRow}>
            <View style={styles.userContentHeadingWrapper}>
              <Text style={styles.userContentHeading}>Facebook Link</Text>
            </View>
            <Pressable style={styles.userContentWrapper}>
              <Text
                style={styles.hyperlink}
                onPress={() => Linking.openURL("https://" + data.facebook)}
              >
                {data.facebook}
              </Text>
            </Pressable>
          </View>
          <View style={[styles.userContentRow, styles.userContentLastRow]}>
            <View style={styles.userContentHeadingWrapper}>
              <Text style={styles.userContentHeading}>Bio</Text>
            </View>
            <View style={styles.userContentWrapper}>
              <Text style={styles.userContent}>{data.bio}</Text>
            </View>
          </View>
        </View>
        {currentDocId === auth.currentUser.uid ? (
          <View style={styles.logoutBtnWrapper}>
            <TouchableOpacity
              style={styles.logoutBtn}
              onPress={() => {
                setShowAlertFunction(true);
              }}
            >
              <Text style={styles.logoutBtnText}>Logout</Text>
            </TouchableOpacity>
          </View>
        ) : (
          console.log("id: " + auth.currentUser.uid)
        )}
      </ScrollView>
    </View>
  );
};

export default Profile;
