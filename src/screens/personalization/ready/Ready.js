import {
  Button,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const Ready = ({ route, navigation }) => {
  const [data, setData] = useState({});
  const getData = () => {
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const [loaded, error] = useFonts({
    PoppinsSemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          source={require("../../../../assets/ready-to-go.png")}
          style={styles.image}
        />
        <Text style={styles.textOne}>You are ready to go!</Text>
        <Text style={styles.textTwo}>
          Congratulations, you are ready to view all our recommendations
        </Text>
        <Image
          source={{ uri: data.avatar.uri }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Housing")}>
          <View style={styles.nextButtonView}>
            <Text style={styles.nextButtonText}>Finish</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Ready;

//🇦🇺 🇦🇺
