import {StyleSheet} from "react-native";
import {BACKGROUND, BLACK, DARK_BLUE, GREY, LIGHT_BLUE, PURPLE_BLUE, WHITE} from "../../styles/colors";
import {heightPercentageToDP, heightPercentageToDP as hp, widthPercentageToDP} from "react-native-responsive-screen";

const styles = StyleSheet.create({
    headingRow: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
    },
    filterText: {
        color: WHITE,
        fontSize: 20,
        fontFamily: "PoppinsBold",
        flex: 3,
    },

    optionText: {
        fontSize: 14,
        fontFamily: "PoppinsRegular",
        color: WHITE,
        marginLeft: 12,
    },

    optionTextSelected: {
        fontSize: 14,
        fontFamily: "PoppinsRegular",
        color: LIGHT_BLUE,
        marginLeft: 12,
    },

    optionWrapper: {
        marginTop: 5,
        marginBottom: 5,
        height: 35,
    },

    modal: {
        backgroundColor: BACKGROUND,
        position: "absolute",
        margin: 0,
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(100)
    },

    seeMoreText: {
        fontSize: 12,
        fontFamily: "PoppinsBold",
        color: PURPLE_BLUE,
    },

    seeMoreWrapper: {
        marginLeft: "auto",
        marginRight: 15,
        marginTop: 8,
    },

    communitySeeMorePopup: {
        position: "absolute",
        width: widthPercentageToDP("100"),
        height: heightPercentageToDP("100"),
    }
})

export default styles