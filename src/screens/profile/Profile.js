import {Image, View, Text, TouchableOpacity, ScrollView} from "react-native";
import styles from "./styles";
import {AntDesign} from "@expo/vector-icons";
import {WHITE} from "../../styles/colors";

import {auth, db} from "../../config/firebase";
import {useEffect, useState} from "react";
import {doc, getDoc} from "firebase/firestore";
import {useFonts} from "expo-font";
import {signOut} from "../../api/loginApi";

// const data = require("../../../assets/mockJSON/MOCK_DATA.json");

const Profile = ({navigation, route}) => {
    const [uid, setUid] = useState(auth.currentUser.uid)
    useEffect(() => {
        if (route.params.user !== undefined && route.params.user !== auth.currentUser.uid) {
            setUid(route.params.user)
            console.log(uid)
        }
    }, [route])
    const [data, setData] = useState({});
    const getData = () => {
        getDoc(doc(db, "users", uid)).then((docSnap) => {
            if (docSnap.exists()) {
                setData(docSnap.data());
            } else {
                console.log("No such document!");
            }
        });
    };
    useEffect(() => {
        getData();
    }, [uid]);
    const [loaded, error] = useFonts({
        PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
        PoppinsBold: require("../../../assets/fonts/Poppins-Bold.ttf"),
    });
    if (!loaded) {
        return null;
    }

    return (
        <ScrollView style={styles.background}>
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Community")
                }}>
                    <AntDesign
                        name={"left"}
                        size={24}
                        color={WHITE}
                        style={styles.backBtn}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Profile</Text>
            </View>
            <View>
                <View style={styles.profileImageWrapper}>
                    <Image
                        source={{
                            uri: data.avatar,
                        }}
                        style={styles.profileImage}
                    />
                </View>
                <View style={styles.userContentDisplay}>
                    <View style={styles.userContentRow}>
                        <View style={styles.userContentHeadingWrapper}>
                            <Text style={styles.userContentHeading}>Display Name</Text>
                        </View>
                        <View style={styles.userContentWrapper}>
                            <Text style={styles.userContent}>{data.fullName}</Text>
                        </View>
                    </View>
                    <View style={styles.userContentRow}>
                        <View style={styles.userContentHeadingWrapper}>
                            <Text style={styles.userContentHeading}>Date of birth</Text>
                        </View>
                        <View style={styles.userContentWrapper}>
                            <Text style={styles.userContent}>{data.dob}</Text>
                        </View>
                    </View>
                    <View style={styles.userContentRow}>
                        <View style={styles.userContentHeadingWrapper}>
                            <Text style={styles.userContentHeading}>E-mail</Text>
                        </View>
                        <View style={styles.userContentWrapper}>
                            <Text style={styles.userContent}>{data.email}</Text>
                        </View>
                    </View>
                    <View style={styles.userContentRow}>
                        <View style={styles.userContentHeadingWrapper}>
                            <Text style={styles.userContentHeading}>Campus</Text>
                        </View>
                        <View style={styles.userContentWrapper}>
                            <Text style={styles.userContent}>{data.campus}</Text>
                        </View>
                    </View>
                    <View style={styles.userContentRow}>
                        <View style={styles.userContentHeadingWrapper}>
                            <Text style={styles.userContentHeading}>Interest in</Text>
                        </View>
                        <View style={styles.userContentWrapper}>
                            <Text style={styles.userContent}>{data.subjects}</Text>
                        </View>
                    </View>
                    <View style={styles.userContentRow}>
                        <View style={styles.userContentHeadingWrapper}>
                            <Text style={styles.userContentHeading}>Facebook Link</Text>
                        </View>
                        <View style={styles.userContentWrapper}>
                            <Text style={styles.userContent}>{data.facebook}</Text>
                        </View>
                    </View>
                    <View style={[styles.userContentRow, styles.userContentLastRow]}>
                        <View style={styles.userContentHeadingWrapper}>
                            <Text style={styles.userContentHeading}>Bio</Text>
                        </View>
                        <View style={styles.userContentWrapper}>
                            <Text style={styles.userContent}>{data.bio}</Text>
                        </View>
                    </View>
                </View>
            </View>
            {auth.currentUser.uid ? (
                <View style={styles.logoutBtnWrapper}>
                    <TouchableOpacity
                        style={styles.logoutBtn}
                        onPress={() => {
                            signOut();
                        }}
                    >
                        <Text style={styles.logoutBtnText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                console.log("id: " + auth.currentUser.uid)
            )}
        </ScrollView>
    );
};

export default Profile;
