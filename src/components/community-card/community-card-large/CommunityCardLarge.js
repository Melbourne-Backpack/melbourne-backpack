import {
    Image,
    ImageBackground,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import styles from "./styles";
import {useFonts} from "expo-font";

const CommunityCardLarge = ({
                                userID,
                                name,
                                picture,
                                topic,
                                campus,
                                navigation,
                            }) => {
    const [loaded, error] = useFonts({
        PoppinsExtraBold: require("../../../../assets/fonts/Poppins-ExtraBold.ttf"),
        PoppinsRegular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
    });

    if (!loaded) {
        return null;
    }
    return (
        <TouchableOpacity
            key={userID}
            style={styles.card}
            onPress={() => {
                navigation.navigate('Content', {
                    screen: "Profile",
                    params: {user: userID},
                })
            }}
        >
            <ImageBackground
                resizeMode={"cover"}
                source={typeof (picture) === "string" && picture !== "" ? {uri: picture} : require("../../../../assets/icon.png")}
                style={styles.userImg}
            >
                <View style={styles.userContent}>
                    <Image style={styles.userContentBackground}/>
                    <View>
                        <View style={styles.userContentRow}>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userTopic}>{topic}</Text>
                        </View>
                        <View style={styles.userContentRow}>
                            <Text style={styles.userCampus}>{campus}</Text>
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
