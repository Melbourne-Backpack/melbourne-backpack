import {StyleSheet} from "react-native";
import {
    DARK_BLUE,
    LIGHT_PURPLE,
    SELECTED_BUTTON,
    WHITE,
} from "../../../styles/colors";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {BACKGROUND} from "../../../styles/colors";

const styles = StyleSheet.create({

    heading: {
        fontFamily: "PoppinsBold",
        fontSize: 20,
        color: WHITE,
        alignSelf: "center",
        marginLeft: 5,
        marginRight: 5
    },

    headingRow: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    },

    container: {
        backgroundColor: BACKGROUND,
    },

    seeMoreBtn: {
        color: WHITE,
        fontSize: hp("1.7%"),
        fontFamily: "PoppinsBold",
    },

    seeMoreBtnContainer: {
        marginBottom: hp("7.3%"),
        marginLeft: wp("53%"),
        marginTop: hp("2%"),
    },
})

export default styles