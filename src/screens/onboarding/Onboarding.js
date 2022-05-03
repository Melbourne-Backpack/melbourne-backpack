import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

import theme, { COLORS, SIZES } from "./styles.js";
import { useFonts } from "expo-font";

const Onboarding = ({ navigation }) => {
  const flatlistRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [viewableItems, setViewableItems] = useState([]);
  const data = [
    {
      _id: "1",
      title: "Step 1",
      description:
        "Register by filling all the fields for us to offer better experiences.",
      img: require("../../../assets/adaptive-icon.png"),
    },
    {
      _id: "2",
      title: "Step 2",
      description:
        "Pick a topic:\n" + "Community, Housing, Shopping, Transportation",
      img: require("../../../assets/adaptive-icon.png"),
    },
    {
      _id: "3",
      title: "Voilà!",
      description:
        "Connect to your desired option using the provided information.",
      img: require("../../../assets/adaptive-icon.png"),
    },
  ];

  const handleViewableItemsChanged = useRef(({ viewableItems }) => {
    setViewableItems(viewableItems);
  });
  useEffect(() => {
    if (!viewableItems[0] || currentPage === viewableItems[0].index) return;
    setCurrentPage(viewableItems[0].index);
  }, [viewableItems]);

  const handleNext = () => {
    if (currentPage === data.length - 1) return;

    flatlistRef.current.scrollToIndex({
      animated: true,
      index: currentPage + 1,
    });
  };

  const handleBack = () => {
    if (currentPage === 0) return;
    flatlistRef.current.scrollToIndex({
      animated: true,
      index: currentPage - 1,
    });
  };

  const handleSkipToEnd = () => {
    flatlistRef.current.scrollToIndex({
      animate: true,
      index: data.length - 1,
    });
  };

  const [loaded, error] = useFonts({
    PoppinsExtraBold: require("../../../assets/fonts/Poppins-ExtraBold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const renderTopSection = () => {
    return (
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: SIZES.base * 2,
          }}
        >
          {/* Back button */}
          <TouchableOpacity
            onPress={handleBack}
            style={{
              padding: SIZES.base,
            }}
          >
            {/* Back icon */}
            {/* Hide back button on 1st screen */}
            <AntDesign
              name="left"
              style={{
                fontFamily: "PoppinsExtraBold",
                color: COLORS.white,
                opacity: currentPage === 0 ? 0 : 1,
              }}
            />
          </TouchableOpacity>

          {/* Skip button */}
          {/* Hide Skip button on last screen */}
          <TouchableOpacity onPress={handleSkipToEnd}>
            <Text
              style={{
                fontSize: 18,
                color: COLORS.white,
                opacity: currentPage === data.length - 1 ? 0 : 1,
              }}
            >
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  const renderBottomSection = () => {
    return (
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: SIZES.base * 2,
            paddingVertical: SIZES.base * 2,
          }}
        >
          {/* Pagination */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {
              // No. of dots
              [...Array(data.length)].map((_, index) => (
                <View
                  key={index}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor:
                      index === currentPage
                        ? COLORS.primary
                        : COLORS.primary + "50",
                    marginRight: 8,
                  }}
                />
              ))
            }
          </View>

          {/* Next or GetStarted button */}
          {/* Show or Hide Next button & GetStarted button by screen */}
          {currentPage !== data.length - 1 ? (
            <TouchableOpacity
              onPress={handleNext}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: COLORS.primary,
              }}
              activeOpacity={0.5}
            >
              <AntDesign
                name="right"
                style={{ fontSize: 18, color: COLORS.white, opacity: 0.3 }}
              />
              <AntDesign
                name="right"
                style={{ fontSize: 25, color: COLORS.white, marginLeft: -15 }}
              />
            </TouchableOpacity>
          ) : (
            // Get Started Button
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.replace("SignIn")}
              style={{
                paddingHorizontal: SIZES.base * 2,
                height: 60,
                borderRadius: 30,
                backgroundColor: COLORS.primary,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 18,
                  marginLeft: SIZES.base,
                }}
              >
                Get Started
              </Text>
              <AntDesign
                name="right"
                style={{
                  fontSize: 18,
                  color: COLORS.white,
                  opacity: 0.3,
                  marginLeft: SIZES.base,
                }}
              />
              <AntDesign
                name="right"
                style={{ fontSize: 25, color: COLORS.white, marginLeft: -15 }}
              />
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    );
  };

  const renderFlatlistItem = ({ item }) => {
    return (
      <View
        style={{
          width: SIZES.width,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginVertical: SIZES.base * 2,
          }}
        >
          <ImageBackground
            source={item.img}
            style={{ width: 300, height: 300, resizeMode: "contains" }}
          />
        </View>
        <View
          style={{
            paddingHorizontal: SIZES.base * 4,
            marginVertical: SIZES.base * 4,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: 30,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              color: COLORS.white,
              fontFamily: "PoppinsRegular",
              textAlign: "center",
              marginTop: 15,
              lineHeight: 28,
            }}
          >
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: "center",
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

      {/* TOP SECTION - Back & Skip button */}
      {renderTopSection()}

      {/* FLATLIST with pages */}
      <FlatList
        data={data}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={renderFlatlistItem}
        ref={flatlistRef}
        onViewableItemsChanged={handleViewableItemsChanged.current}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
        initialNumToRender={1}
        extraData={SIZES.width}
      />

      {/* BOTTOM SECTION - pagination & next or GetStarted button */}
      {renderBottomSection()}
    </View>
  );
};

export default Onboarding;
