import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { PLACEHOLDER, WHITE } from "../../styles/colors";
import { auth, database, db } from "../../config/firebase";
import { useEffect, useRef, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { get, set, ref, onValue, push, update } from "firebase/database";

const Messages = ({ navigation, route }) => {
  const [search, setSearch] = useState("");

  const [data, setData] = useState([]);

  const [uid, setUid] = useState(null);
  const [users, setUsers] = useState([]);
  const [userToAdd, setUserToAdd] = useState(null);
  const [selectedUser, setSelectedUser] = useState({});
  const [myData, setMyData] = useState({});

  const getUserData = async (uid) => {
    await getDoc(doc(db, "users", uid)).then((docSnap) => {
      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    });
  };

  const onLogin = async () => {
    try {
      const user = await findUser(auth.currentUser.uid);
      if (user) {
        setMyData(user);
        console.log("old user");
      } else {
        const newUserObj = {
          uid: auth.currentUser.uid,
          avatar: route.params.user.avatar,
          fullName: route.params.user.fullName,
          friends: [],
          email: route.params.user.email,
        };

        await set(ref(database, `users/${auth.currentUser.uid}`), newUserObj);
        console.log("new user");
        setMyData(newUserObj);
      }
      const myUserRef = ref(database, `users/${auth.currentUser.uid}`);
      onValue(myUserRef, (snapshot) => {
        const userData = snapshot.val();
        setUsers(userData.friends);
        setMyData((prevData) => ({
          ...prevData,
          friends: userData.friends,
        }));
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onLogin();
  }, []);

  const findUser = async (uid) => {
    const mySnapshot = await get(ref(database, `users/${uid}`));
    return mySnapshot.val();
  };

  const onAddFriend = async (uid) => {
    const user = await findUser(uid);

    if (user) {
      if (user.uid === myData.uid) {
        console.log("Cant add yourself");
        return;
      }

      if (myData.friends) {
        for (let i = 0; i < myData.friends.length; i++) {
          if (myData.friends[i].uid === user.uid) {
            console.log("Cant add this user twice");
            return;
          }
        }
      }

      const newChatRoomRef = push(ref(database, `chatrooms`), {
        firstUser: myData.uid,
        secondUser: user.uid,
        messages: [],
      });

      const newChatRoomId = newChatRoomRef.key;

      const userFriends = user.friends || [];
      const myFriend = myData.friends || [];
      getUserData(uid);
      await update(ref(database, `users/${uid}`), {
        friends: [
          ...userFriends,
          {
            uid: myData.uid,
            avatar: myData.avatar,
            fullName: myData.fullName,
            chatRoomId: newChatRoomId,
          },
        ],
      });

      await update(ref(database, `users/${myData.uid}`), {
        friends: [
          ...myFriend,
          {
            uid: user.uid,
            avatar: user.avatar,
            fullName: user.fullName,
            chatRoomId: newChatRoomId,
          },
        ],
      });
      console.log("Add friend success");
    }
  };

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
    <View style={styles.background}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={styles.topBar}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Content", { screen: "Profile" });
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
          <TouchableOpacity
            style={styles.newWrapper}
            onPress={() => onAddFriend("vbhmalnK0GXZZkKN792xRj3KqVt1")}
          >
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
              onTextChange={(text) => setSearch(text)}
            >
              {search}
            </TextInput>
          </View>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/voice-icon.png")}
              style={{ width: 16, height: 16 }}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.messageWrapper}
          showsVerticalScrollIndicator={false}
        >
          {myData.friends &&
            myData.friends.map((item) => {
              return (
                <TouchableOpacity
                  key={item.uid}
                  style={styles.userWrapper}
                  onPress={() => {
                    navigation.navigate("Chat", {
                      user: item,
                      myData: myData,
                      selectedUser: item,
                    });
                  }}
                >
                  <View style={styles.imageNameMessWrapper}>
                    <Image
                      source={{
                        uri: item.avatar,
                      }}
                      style={styles.userImg}
                    />
                    <View style={styles.textWrapper}>
                      <Text style={styles.userName}>{item.fullName}</Text>
                      <Text
                        style={styles.messageText}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                      >
                        {null}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.dotTimeWrapper}>
                    <Image
                      source={require("../../../assets/available-dot.png")}
                      style={styles.dot}
                    />
                    <Text style={styles.messageTime}>{null}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Messages;

//🇦🇺 🇦🇺
