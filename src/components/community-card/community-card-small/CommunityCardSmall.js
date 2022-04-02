import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import styles from "./styles";

const CommunityCardSmall = ({ userID, name, navigation, picture }) => {
  return (
    <TouchableOpacity
      key={userID}
      style={styles.card}
      onPress={() => {
        navigation.navigate("Profile", {
          id: userID,
        });
      }}
    >
      <ImageBackground
        resizeMode={"cover"}
        source={{ uri: picture }}
        style={styles.userImg}
      >
        <View style={styles.userContent}>
          <Image style={styles.userContentBackground} />
          <View style={styles.userContentRow}>
            <TouchableOpacity style={styles.detailBtn}>
              <Text style={styles.detailBtnText}>{name}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CommunityCardSmall;
