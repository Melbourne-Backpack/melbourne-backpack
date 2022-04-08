import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { LIGHT_BLUE } from "../../styles/colors";
import CommunityFilterBtn from "../community-filter/CommunityFilterBtn/CommunityFilterBtn";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import RecommendationCard from "../recommendation/card/RecommendationCard";

const CommunityFilter = ({
  headingList,
  optionList,
  navigation,
  housingList,
}) => {
  /*read 2 arrays, 1 for headings, 1 for options, each heading will be displayed with the corresponding data in 1 view*/
  const headings = headingList;
  const options = optionList;
  const [show, setShow] = useState(false);
  const [data, setData] = useState(housingList);
  const filterMaxCardsPerPageInitial = 6;
  const filterMaxCardsPerPage = 4;
  const [filterMaxCards, setFilterMaxCards] = useState(
    filterMaxCardsPerPageInitial
  );
  // const filter = {};
  let filter = {};
  const [submitted, setSubmitted] = useState(false);
  const [loaded, error] = useFonts({
    PoppinsBold: require("../../../assets/fonts/Poppins-Bold.ttf"),
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  /* start at -1 instead of 0 because i++ is put before return (in toggle function for filter btn */
  let i = -1;
  return (
    <View>
      <View style={styles.filterBtnWrapper}>
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => setShow(!show)}
        >
          <Ionicons
            name="filter"
            size={24}
            color={LIGHT_BLUE}
            style={styles.filterIcon}
          />
        </TouchableOpacity>
      </View>
      <View>
        {/* filter toggle btn */}
        {show ? (
          <View>
            {headings.map((heading) => {
              i++;
              let optionList = options[i];
              filter[heading] = [];
              return (
                <View key={heading} style={styles.filterSingleWrapper}>
                  <Text style={styles.filterText}>
                    {heading.slice(0, 1).toUpperCase() +
                      heading.slice(1, heading.length)}
                  </Text>
                  <View style={styles.optionWrapper}>
                    {optionList.map((option) => {
                      return (
                        <CommunityFilterBtn
                          key={option.index}
                          value={option.name}
                          filter={filter}
                          heading={heading}
                          submitted={submitted}
                        />
                      );
                    })}
                  </View>
                </View>
              );
            })}
            <View style={styles.submitBtnWrapper}>
              <TouchableOpacity
                style={styles.submitBtn}
                onPress={() => {
                  setSubmitted((prev) => !prev);
                  setData([]);
                  housingList.map((housing) => {
                    let added = 0;
                    headings.map((heading) => {
                      filter[heading].map((option) => {
                        if (
                          option.includes("-") &&
                          option.slice(0, option.indexOf("-")) <=
                            housing[heading] &&
                          option.slice(
                            option.indexOf("-") + 1,
                            option.length
                          ) >= housing[heading]
                        ) {
                          if (added === 0) {
                            setData((data) => [...data, housing]);
                            added++;
                          }
                        } else if (
                          option[option.length - 1] === "+" &&
                          option.slice(0, option.length - 1) <= housing[heading]
                        ) {
                          if (added === 0) {
                            setData((data) => [...data, housing]);
                            added++;
                          }
                        } else if (housing[heading].toString() === option) {
                          if (added === 0) {
                            setData((data) => [...data, housing]);
                            added++;
                          }
                        }
                      });
                    });
                  });
                }}
              >
                <Text style={styles.submitBtnText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        <SafeAreaView style={styles.communityList}>
          <FlatList
            data={data.slice(0, filterMaxCards)}
            horizontal={false}
            numColumns={1}
            renderItem={(info) => {
              return (
                <RecommendationCard
                  key={info.index}
                  data={info.item}
                  housing={true}
                />
              );
            }}
          />
        </SafeAreaView>

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
    </View>
  );
};

export default CommunityFilter;
