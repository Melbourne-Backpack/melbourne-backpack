import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { PLACEHOLDER, WHITE, YELLOW } from "../../styles/colors";
import styles from "./styles";
import { useFonts } from "expo-font";
import Tag from "../../components/housing-details/tags/Tag";
import { useState } from "react";
import Review from "../../components/housing-details/reviews/Review";

const HousingDetailScreen = ({ navigation: { goBack } }) => {
  const [myComment, setMyComment] = useState("");
  const [addReviewVisible, setAddReviewVisible] = useState(false);
  const [otherReviewVisible, setOtherReviewVisible] = useState(false);

  const data = {
    name: "4 bedroom apartment deluxe",
    building: "Dwell Student Housing",
    address: "250 Spencer Street, Melbourne VIC 3000",
    rating: "4.0",
    tags: ["Northwest", "Apartment", "Student Housing"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an " +
      "unknown printer took a galley of type and scrambled it to make a type specimen book. It " +
      "has survived not only five centuries, but also the leap into electronic typesetting, " +
      "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset " +
      "sheets containing Lorem Ipsum passages, and more recently with desktop publishing software " +
      "like Aldus PageMaker including versions of Lorem Ipsum. \n\nContrary to popular belief, Lorem " +
      "Ipsum is not simply random text. It has roots in a piece of classical Latin literature from " +
      "45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney " +
      "College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem " +
      "Ipsum passage, and going through the cites of the word in classical literature, discovered the " +
      'undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum ' +
      'et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise ' +
      "on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, " +
      '"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    reviews: [
      {
        username: "Go Junho",
        avatar: "",
        rating: 4.5,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet lacinia aliquam. " +
          "Integer non augue dui. Proin a odio rhoncus, fermentum magna ac, maximus quam. Curabitur eget " +
          "risus ex. Maecenas egestas bibendum urna iaculis ullamcorper. Cras sed egestas velit, eget " +
          "facilisis tellus. Curabitur ac ipsum eu ex pharetra bibendum.",
      },
      {
        username: "Han Sooyoung",
        avatar: "",
        rating: 4.2,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet lacinia aliquam. " +
          "Integer non augue dui. Proin a odio rhoncus, fermentum magna ac, maximus quam. Curabitur eget " +
          "risus ex. Maecenas egestas bibendum urna iaculis ullamcorper.",
      },
    ],
  };

  const [loaded, error] = useFonts({
    PoppinsSemiBold: require("../../../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../../../assets/fonts/Poppins-Medium.ttf"),
    PoppinsBold: require("../../../assets/fonts/Poppins-Bold.ttf"),
    PoppinsExtraBold: require("../../../assets/fonts/Poppins-ExtraBold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => goBack()}>
          <Ionicons name="chevron-back" size={30} color={WHITE} />
        </TouchableOpacity>
        <Text style={[styles.building, styles.text]}>{data.building}</Text>
      </View>

      <ScrollView style={styles.wrapper}>
        <Image
          source={require("../../../assets/images/student-room.jpg")}
          style={styles.img}
        />
        <Text style={[styles.text, styles.name]}>{data.name}</Text>
        <Text style={[styles.text, styles.address]}>{data.address}</Text>

        <View style={styles.starContainer}>
          <AntDesign name="star" size={30} color={YELLOW} style={styles.star} />
          <AntDesign name="star" size={30} color={YELLOW} style={styles.star} />
          <AntDesign name="star" size={30} color={YELLOW} style={styles.star} />
          <AntDesign name="star" size={30} color={YELLOW} style={styles.star} />
          <AntDesign
            name="staro"
            size={30}
            color={YELLOW}
            style={styles.star}
          />
          <Text style={[styles.text, styles.rating]}>{data.rating}</Text>
        </View>

        <View style={styles.tagContainer}>
          {data.tags.map((tag, id) => {
            return <Tag key={id} text={tag} />;
          })}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={[styles.text, styles.sectionTitle]}>Description</Text>
        </View>
        <Text style={[styles.text, styles.desc]}>{data.description}</Text>

        <View style={styles.sectionHeader}>
          <Text style={[styles.text, styles.sectionTitle]}>
            Add your review
          </Text>
          {addReviewVisible ? (
            <AntDesign
              name="minussquare"
              size={28}
              color={YELLOW}
              onPress={() => setAddReviewVisible(!addReviewVisible)}
            />
          ) : (
            <AntDesign
              name="plussquare"
              size={28}
              color={YELLOW}
              onPress={() => setAddReviewVisible(!addReviewVisible)}
            />
          )}
        </View>

        {addReviewVisible ? (
          <TextInput
            placeholder="Enter comment..."
            placeholderTextColor={PLACEHOLDER}
            multiline
            onChangeText={setMyComment}
            value={myComment}
            style={[styles.text, styles.comment]}
          />
        ) : null}

        <View style={styles.reviewContainer}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.text, styles.sectionTitle]}>
              RMIT students' reviews
            </Text>
            {otherReviewVisible ? (
              <AntDesign
                name="minussquare"
                size={28}
                color={YELLOW}
                onPress={() => setOtherReviewVisible(!otherReviewVisible)}
              />
            ) : (
              <AntDesign
                name="plussquare"
                size={28}
                color={YELLOW}
                onPress={() => setOtherReviewVisible(!otherReviewVisible)}
              />
            )}
          </View>

          {otherReviewVisible
            ? data.reviews.map((review, id) => (
                <Review key={id} review={review} />
              ))
            : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HousingDetailScreen;
