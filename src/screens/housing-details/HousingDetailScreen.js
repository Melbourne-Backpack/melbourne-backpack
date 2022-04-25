import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PLACEHOLDER, WHITE } from "../../styles/colors";
import styles from "./styles";
import { useFonts } from "expo-font";
import Tag from "../../components/housing-details/tags/Tag";
import { useEffect, useState } from "react";
import Review from "../../components/housing-details/reviews/Review";
import SectionInfo from "../../components/housing-details/section-info/SectionInfo";
import StarRatingView from "../../components/housing-details/StarRatingView";
import StarRating from "react-native-star-rating-widget";
import { postReview } from "../../api/handleReview";
import {
  collection,
  doc,
  getDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../config/firebase";

const HousingDetailScreen = ({ navigation: { goBack }, route }) => {
  const [myComment, setMyComment] = useState("");
  const [myRating, setMyRating] = useState(null);
  const [housingData, setHousingData] = useState({});
  const [housingDesc, setHousingDesc] = useState("");
  const [housingName, setHousingName] = useState("");
  const [userReviews, setUserReviews] = useState([]);
  const id = route.params.id;

  const getData = () => {
    getDoc(doc(db, "housing", id)).then((docSnap) => {
      if (docSnap.exists()) {
        setHousingData(docSnap.data());
        setHousingDesc(formatData(docSnap.data().description));
        setHousingName(docSnap.data().name.toUpperCase());
        getReview(docSnap.data()["category_id"]);
      } else {
        console.log("No such document!");
      }
    });
  };

  const getReview = async (categoryId) => {
    const q = query(
      collection(db, "reviews"),
      where("category_id", "==", categoryId)
    );
    try {
      onSnapshot(q, (querySnapshot) => {
        const reviews = [];
        querySnapshot.forEach((doc) => {
          reviews.push(doc.data());
        });
        setUserReviews(reviews);
      });
      // const querySnapshot = await getDocs(q);
      // const reviews = [];
      // querySnapshot.forEach((doc) => {
      //   reviews.push(doc.data());
      // });
      // setUserReviews(reviews);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const formatData = (para) => {
    if (para[para.length - 1] !== ".") {
      return para.replace(/(^|[.!?]\s+)([a-z])/g, (c) => c.toUpperCase()) + ".";
    } else {
      return para.replace(/(^|[.!?]\s+)([a-z])/g, (c) => c.toUpperCase());
    }
  };

  const data = {
    name: "4 bedroom apartment deluxe",
    building: "Dwell Student Housing",
    address: "250 Spencer Street, Melbourne VIC 3000",
    rating: 4.3,
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
        <Text style={[styles.building, styles.text]}>{housingName}</Text>
      </View>

      <ScrollView style={styles.wrapper}>
        <Image source={{ uri: housingData.image }} style={styles.img} />
        <Text style={[styles.text, styles.name]}>{housingData.title}</Text>
        <Text style={[styles.text, styles.price]}>${housingData.price}</Text>
        <Text style={[styles.text, styles.address]}>{housingData.address}</Text>

        <View style={styles.starContainer}>
          <StarRatingView width={30} height={30} rating={data.rating} />
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

        <Text style={[styles.text, styles.desc]}>{housingDesc}</Text>
        <SectionInfo title="Add your review">
          <TextInput
            placeholder="Enter comment..."
            placeholderTextColor={PLACEHOLDER}
            multiline
            onChangeText={setMyComment}
            value={myComment}
            style={[styles.text, styles.comment]}
          />

          <View style={styles.ratingWrapper}>
            <Text style={[styles.text, styles.myRating]}>
              Rate this housing: {myRating}
            </Text>
            <StarRating
              rating={myRating}
              onChange={setMyRating}
              starSize={42}
              starStyle={styles.starStyle}
            />

            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                postReview(housingData["category_id"], myComment, myRating);
                setMyComment("");
                setMyRating(0);
              }}
            >
              <Text style={[styles.text, styles.btnText]}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </SectionInfo>

        <View style={styles.reviewContainer}>
          <SectionInfo title="RMIT students' reviews">
            {userReviews.map((review, id) => {
              return <Review key={id} review={review} />;
            })}
          </SectionInfo>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HousingDetailScreen;
