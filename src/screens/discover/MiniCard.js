import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { AntDesign, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { WHITE } from "../../styles/colors";

const MiniCard = ({ videoId, title, channelTitle }) => {
  const [loaded, error] = useFonts({
    PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <TouchableOpacity>
      <View style={styles.videoCardHolder}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          }}
          style={styles.videoImage}
        />
        <View style={styles.titleHolder}>
          <Text
            style={styles.videoTitle}
            ellipsizeMode="tail"
            numberOfLines={3}
          >
            {title}
          </Text>
          <View style={styles.channelHolder}>
            <Text style={styles.channelTitle}>{channelTitle}</Text>
            <MaterialIcons name="verified" size={14} color={WHITE} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MiniCard;
