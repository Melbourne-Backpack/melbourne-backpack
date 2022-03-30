import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./styles";

const CommunityCardLarge = (props) => {
  return (
    <TouchableOpacity
      key={props.id}
      style={styles.card}
      onPress={() => {
        props.navigation.navigate("Profile", {
          userID: props.id,
        });
      }}
    >
      <ImageBackground
        resizeMode={"cover"}
        source={require("../../../../assets/images/avatar-placeholder.jpg")}
        style={styles.userImg}
      >
        <View style={styles.userContent}>
          <Image style={styles.userContentBackground} />
          <View>
            <View style={styles.userContentRow}>
              <Text style={styles.userName}>{props.name}</Text>
              <Text style={styles.userTopic}>IT</Text>
            </View>
            <View style={styles.userContentRow}>
              <Text style={styles.userCampus}>{props.campus}</Text>
              <TouchableOpacity style={styles.detailBtn}>
                <Text style={styles.detailBtnText}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CommunityCardLarge;
