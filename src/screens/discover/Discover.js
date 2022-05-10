import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { WHITE } from "../../styles/colors";
import MiniCard from "./MiniCard";
import { MY_YOUTUBE_API_KEY } from "@env";

const my_API_key = MY_YOUTUBE_API_KEY;
const youtubeAPI = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCFnWd6d9OggLixnow-3McjA&maxResults=50&q=campus%20exchange&key=${my_API_key}`;
const channelAPI = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UCFnWd6d9OggLixnow-3McjA&key=${my_API_key}`;

const Discover = ({ navigation }) => {
  const [miniCard, setMiniCard] = useState([]);
  const [channelData, setChannelData] = useState({});

  const fetchData = () => {
    fetch(youtubeAPI)
      .then((res) => res.json())
      .then((data) => setMiniCard(data.items))
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchChannelData = () => {
    fetch(channelAPI)
      .then((res) => res.json())
      .then((data) => {
        setChannelData(data.items);
      });
  };

  useEffect(() => {
    fetchData();
    fetchChannelData();
  }, []);

  const [loaded, error] = useFonts({
    PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <AntDesign
            name={"left"}
            size={24}
            color={WHITE}
            style={styles.backBtn}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Discovery</Text>

        <TouchableOpacity
          style={styles.messenger}
          onPress={() => {
            fetchData();
          }}
        >
          <Entypo name="dots-three-horizontal" size={25} color={WHITE} />
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.wrapper}>
        <FlatList
          data={miniCard}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.videoId}
          renderItem={({ item }) => {
            return (
              <MiniCard
                videoId={item.id.videoId}
                title={item.snippet.title}
                channelTitle={item.snippet.channelTitle}
                description={channelData[0].snippet.description}
                avatar={channelData[0].snippet.thumbnails.high.url}
              />
            );
          }}
          style={styles.flatList}
        />
      </SafeAreaView>
    </View>
  );
};

export default Discover;
