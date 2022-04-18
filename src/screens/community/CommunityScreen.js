import {Text, View, ScrollView, FlatList, SafeAreaView} from "react-native";
import CommunityCardLarge from "../../components/community-card/community-card-large/CommunityCardLarge";
import CommunityFilter from "../../components/community-filter/CommunityFilter";
import styles from "./styles";
import {useFonts} from "expo-font";
import {collection, getDocs} from "firebase/firestore";
import {db, auth} from "../../config/firebase";
import {useEffect, useState} from "react";

const CommunityScreen = ({navigation}) => {
    const communityRef = collection(db, "users")
    const [community, setCommunity] = useState([])
    const fetchData = () => {
        getDocs(communityRef).then((data) => {
            setCommunity(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        })
    }
    useEffect(() => {
        fetchData()
    }, [])
    const mostLikeYouMaxCards = 4;
    const self = auth.currentUser.uid;

    const [loaded, error] = useFonts({
        PoppinsBold: require("../../../assets/fonts/Poppins-Bold.ttf"),
        PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
    });

    if (!loaded) {
        return null;
    }

    const mostLikeYouData = () => {
        let temp = []
        let myCampus = "";
        let myTopic = [];
        community.map((user) => {
            let id = user.id;
            if (id === self) {
                if (user.campus) myCampus = user.campus;
                if (user.subjects) myTopic = user.subjects;
            }
        });

        for (let i = 0; i < community.length; i++) {
            let user = community[i];
            let id = user.id;
            if (
                id !== self &&
                user.campus === myCampus
            ) {
                console.log(id, " ", temp.includes(id))
                temp.push(user)
            }
        }

        if (temp.length < mostLikeYouMaxCards)
            for (let i = 0; i < community.length; i++) {
                let user = community[i];
                let id = user.id;
                if (
                    id !== self &&
                    temp[i - 1] &&
                    temp[i - 1] !== id
                ) {
                    myTopic.map((topic) => {
                        if (user.subjects.includes(topic)) {
                            console.log(id, " ", temp.includes(id))
                            temp.push(user)
                        }
                    });
                }
            }
        return temp
    };

    const campus = [
        {
            id: 1,
            name: "Saigon",
        },
        {
            id: 2,
            name: "Hanoi",
        },
        {
            id: 3,
            name: "Danang",
        },
    ];

    const topic = [
        {
            id: 1,
            name: "Economics",
        },
        {
            id: 2,
            name: "Business",
        },
        {
            id: 3,
            name: "Robotics",
        },
        {
            id: 4,
            name: "Management",
        },
        {
            id: 5,
            name: "Aviation",
        },
        {
            id: 6,
            name: "Education",
        },
        {
            id: 7,
            name: "Design",
        },
        {
            id: 8,
            name: "Prof Com",
        },
        {
            id: 9,
            name: "Technology",
        },
        {
            id: 10,
            name: "Digital Marketing",
        },
    ];

    let mostLikeYouDataForDisplay
    if (community.length > 0) {
        mostLikeYouDataForDisplay = mostLikeYouData().slice(
            0,
            mostLikeYouMaxCards)
        if (mostLikeYouDataForDisplay.length === 0) {
            mostLikeYouDataForDisplay = community.slice(0, mostLikeYouMaxCards)
        }
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.mostLikeYouContainer}>
                <Text style={styles.mostLikeYouText}>Most like you</Text>
                <SafeAreaView>
                    <FlatList
                        style={styles.mostLikeYou}
                        extraData={community}
                        data={mostLikeYouDataForDisplay}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={(user) => {
                            return (
                                <CommunityCardLarge
                                    userID={user.item.id}
                                    name={user.item.fullName}
                                    campus={user.item.campus}
                                    picture={user.item.avatar}
                                    topic={user.item.subjects ? user.item.subjects[Math.floor(Math.random() * 2)] : null}
                                    navigation={navigation}
                                />
                            );
                        }}
                    />
                </SafeAreaView>
            </View>
            <View style={styles.communityListContainer}>
                <Text style={styles.communityListText}>Community</Text>
                <View>
                    {community.length > 0 ?
                        <CommunityFilter
                            headingList={["campus", "subjects"]}
                            optionList={[campus, topic]}
                            navigation={navigation}
                            userList={community}
                        /> : null}
                </View>
            </View>
        </ScrollView>
    );
};

export default CommunityScreen;
