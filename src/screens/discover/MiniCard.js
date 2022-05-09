import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { AntDesign, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { WHITE } from "../../styles/colors";
import YoutubePlayer from "react-native-youtube-iframe";
import { widthPercentageToDP } from "react-native-responsive-screen";

const MiniCard = ({ videoId, title, channelTitle }) => {
  const [playVideo, setPlayVideo] = useState(false);
  const [loaded, error] = useFonts({
    PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.itemContainer}>
      <View style={styles.videoCardHolder}>
        <TouchableOpacity
          style={styles.videoImageHolder}
          onPress={() => setPlayVideo(!playVideo)}
        >
          <Image
            source={{
              uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
            }}
            style={styles.videoImage}
          />
        </TouchableOpacity>

        <View style={styles.titleHolder}>
          <TouchableOpacity onPress={() => setPlayVideo(!playVideo)}>
            <Text
              style={styles.videoTitle}
              ellipsizeMode="tail"
              numberOfLines={3}
            >
              {title}
            </Text>
          </TouchableOpacity>

          <View style={styles.channelHolder}>
            <View style={styles.channelHolder}>
              <Image
                source={{
                  uri: "https://yt3.ggpht.com/ytc/AKedOLRxZLozvzkAvdXibKotVMxdSB84u3gcsOPySwLCXg=s800-c-k-c0x00ffffff-no-rj",
                }}
                style={styles.channelAva}
              />
              <Text style={styles.channelTitle}>{channelTitle}</Text>
              <MaterialIcons name="verified" size={14} color={WHITE} />
            </View>
            {playVideo ? (
              <TouchableOpacity onPress={() => setPlayVideo(!playVideo)}>
                <AntDesign name="caretup" size={13} color={WHITE} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setPlayVideo(!playVideo)}>
                <AntDesign name="caretdown" size={13} color={WHITE} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>

      {playVideo && (
        <View style={styles.youtubeVideo}>
          <YoutubePlayer
            height={250}
            play={false}
            videoId={videoId}
            width={widthPercentageToDP(95)}
          />
        </View>
      )}
    </View>
  );
};

export default MiniCard;
