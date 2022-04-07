import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { WHITE, YELLOW } from "../../styles/colors";
import styles from "./styles";
import { useFonts } from "expo-font";
import Tag from "../../components/housing-details/Tag";

const HousingDetailScreen = () => {
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
    comments: {
      username: "Go Junho",
      avatar: "",
      rating: 4.5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet lacinia aliquam. " +
        "Integer non augue dui. Proin a odio rhoncus, fermentum magna ac, maximus quam. Curabitur eget " +
        "risus ex. Maecenas egestas bibendum urna iaculis ullamcorper. Cras sed egestas velit, eget " +
        "facilisis tellus. Curabitur ac ipsum eu ex pharetra bibendum. Sed vel enim porta, condimentum " +
        "nunc et, interdum dui. Nullam bibendum ipsum nisi, id condimentum velit tincidunt non.",
    },
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
        <Ionicons name="chevron-back" size={30} color={WHITE} />
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

        <Text style={[styles.text, styles.sectionTitle]}>Description</Text>
        <Text style={[styles.text, styles.desc]}>{data.description}</Text>

        <Text style={[styles.text, styles.sectionTitle]}>Review</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HousingDetailScreen;
