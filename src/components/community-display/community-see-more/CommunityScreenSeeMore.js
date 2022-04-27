import {View, Text, TouchableOpacity, FlatList, Dimensions} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {WHITE} from "../../../styles/colors";
import styles from "./styles";
import CommunityCardLarge from "../../community-card/community-card-large/CommunityCardLarge";
import {useState} from "react";

const CommunityScreenSeeMore = ({heading, option, data, show, navigation}) => {
    const [filterMaxCards, setFilterMaxCards] = useState(6)
    const filterMaxCardsPerPageInitial = 6
    const filterMaxCardsPerPage = 6
    const windowHeight = Dimensions.get('window').height;
    const numColumns = Math.floor(windowHeight / 300)
    return (
        <FlatList data={[1]} renderItem={
            () => {
                return (
                    <View styles={styles.container}>
                        <View style={styles.headingRow}>
                            <View>
                                <TouchableOpacity
                                    onPress={() => {
                                        show(false)
                                    }}
                                >
                                    <AntDesign
                                        name={"left"}
                                        size={24}
                                        color={WHITE}
                                        style={styles.backBtn}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={styles.heading}>
                                    {heading[0].toUpperCase() + heading.slice(1, heading.length) + " - " + option}
                                </Text>
                            </View>
                        </View>

                        <FlatList
                            extraData={data}
                            data={data.slice(0, filterMaxCards)}
                            numColumns={numColumns}
                            style={styles.cardContainer}
                            renderItem={(user) => {
                                return (
                                    <TouchableOpacity onPress={async () => await show(false)}>
                                        <CommunityCardLarge
                                            userID={user.item.id}
                                            name={user.item.fullName}
                                            campus={user.item.campus}
                                            picture={user.item.avatar}
                                            topic={user.item.subjects ? user.item.subjects[Math.floor(Math.random() * 2)] : null}
                                            navigation={navigation}
                                        />
                                    </TouchableOpacity>
                                );
                            }}
                        />

                        <View style={styles.seeMoreBtnContainer}>
                            {filterMaxCards >= data.length &&
                            data.length >= filterMaxCardsPerPageInitial ? (
                                <TouchableOpacity
                                    onPress={() => {
                                        setFilterMaxCards(filterMaxCardsPerPageInitial);
                                    }}
                                >
                                    <Text style={styles.seeMoreBtn}>See less</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    onPress={() => {
                                        setFilterMaxCards(
                                            (prevState) => prevState + filterMaxCardsPerPage
                                        );
                                    }}
                                >
                                    <Text style={styles.seeMoreBtn}>See more</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                )
            }
        }/>
    )
}

export default CommunityScreenSeeMore