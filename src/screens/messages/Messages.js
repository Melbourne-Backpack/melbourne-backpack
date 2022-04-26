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
import { auth } from "../../config/firebase";
import { useState } from "react";

const Messages = ({ navigation }) => {
  const [search, setSearch] = useState("");

  const messages = [
    {
      id: "1",
      userName: "Nguyen Hoang Linh",
      userImg:
        "https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/122171718_2825005767824010_341372418345064282_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1hBc_EFBtngAX8gwu7F&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT8o26Qby1goNccYImGUc4f2kVBkmi3ylg621pfSctJ3QQ&oe=628F116F",
      messageTime: "3:44 PM",
      messageText: "Hi, this is Melbourne Backpack!",
    },
    {
      id: "2",
      userName: "Doan Yen Nhi",
      userImg:
        "https://github.com/kuri-team/yabe-online-mall/blob/main/public/media/image/nhi.jpg?raw=true",
      messageTime: "9:00 AM",
      messageText: "Hi, this is Melbourne Backpack!",
    },
    {
      id: "3",
      userName: "Do Duc Manh",
      userImg:
        "https://github.com/kuri-team/yabe-online-mall/blob/main/public/media/image/manh.jpg?raw=true",
      messageTime: "Friday   ",
      messageText: "Hi, this is Melbourne Backpack!",
    },
    {
      id: "4",
      userName: "Tran Ngoc Anh Thu",
      userImg:
        "https://github.com/kuri-team/yabe-online-mall/blob/main/public/media/image/thu.jpg?raw=true",
      messageTime: "8:31 AM",
      messageText: "Hi, this is Melbourne Backpack!",
    },
  ];
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
          {messages.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.userWrapper}
                onPress={() => {
                  navigation.navigate("Chat", { userName: item.userName });
                }}
              >
                <View style={styles.imageNameMessWrapper}>
                  <Image
                    source={{
                      uri: item.userImg,
                    }}
                    style={styles.userImg}
                  />
                  <View style={styles.textWrapper}>
                    <Text style={styles.userName}>{item.userName}</Text>
                    <Text
                      style={styles.messageText}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {item.messageText}
                    </Text>
                  </View>
                </View>

                <View style={styles.dotTimeWrapper}>
                  <Image
                    source={require("../../../assets/available-dot.png")}
                    style={styles.dot}
                  />
                  <Text style={styles.messageTime}>{item.messageTime}</Text>
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
