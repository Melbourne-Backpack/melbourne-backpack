import {ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {
    AntDesign,
    MaterialCommunityIcons,
    Ionicons,
} from "@expo/vector-icons";

import styles from "./styles";
import {useNavigation} from "@react-navigation/native";
import {GREY, YELLOW} from "../../../styles/colors";
import {useFonts} from "expo-font";
import {useEffect, useState} from "react";
import Capitalize from "../../../utils/Capitalize";

const RecommendationCard = ({data, housing}) => {
    const [address, setAddress] = useState("")
    const [loaded, error] = useFonts({
        PoppinsExtraBold: require("../../../../assets/fonts/Poppins-ExtraBold.ttf"),
        PoppinsRegular: require("../../../../assets/fonts/Poppins-Regular.ttf"),
        PoppinsSemiBold: require("../../../../assets/fonts/Poppins-SemiBold.ttf"),
    });
    useEffect(() => {
        if (data.address !== undefined) {
            setAddress(Capitalize(data.address))
        }
    }, [data])


    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.card}>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate("Details")}
            >
                <ImageBackground
                    source={{uri: data.image}}
                    style={styles.backgroundImg}
                    imageStyle={{borderTopLeftRadius: 20, borderTopRightRadius: 20}}
                    resizeMode="cover"
                >
                    <View style={styles.overlay}>
                        {housing !== true ? (
                            <></>
                        ) : (
                            <Text style={styles.rating}>
                                {data.rating} <AntDesign name="star" size={30} color={YELLOW}/>
                            </Text>
                        )}
                    </View>
                </ImageBackground>
            </TouchableOpacity>

            <View style={styles.info}>
                <TouchableOpacity onPress={() => navigation.navigate("Details")}>
                    <Text
                        style={[styles.name, styles.text]}>{data.title ? data.title[0].toUpperCase() + data.title.slice(1, data.title.length) : data.title}</Text>
                </TouchableOpacity>
                {housing !== true ? (
                    <></>
                ) : (
                    <Text style={[styles.price, styles.text]}>${data.price}</Text>
                )}
                <Text style={[styles.text, styles.location]}>
                    <Ionicons name="location-sharp" size={16} color="white"/>{" "}
                    {address}
                </Text>

                {housing !== true ? (
                    <></>
                ) : (
                    <View style={styles.extraOuterContainer}>
                        <View style={styles.extraContainer}>
                            <Text style={styles.extra}>{data.bed}</Text>
                            <Ionicons name="bed" size={35} color={GREY}/>
                        </View>

                        <View style={styles.extraContainer}>
                            <Text style={styles.extra}>{data.bath}</Text>
                            <MaterialCommunityIcons name="shower" size={35} color={GREY}/>
                        </View>
                    </View>
                )}
            </View>
        </View>
    );
};

export default RecommendationCard;
