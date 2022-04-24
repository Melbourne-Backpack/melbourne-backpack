import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { LIGHT_BLUE } from "../../styles/colors";
import CommunityFilterBtn from "../community-filter/CommunityFilterBtn/CommunityFilterBtn";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import RecommendationCard from "../recommendation/card/RecommendationCard";
import DistanceList from "../../utils/DistanceList";

const HousingFilter = ({
  headingList,
  optionList,
  navigation,
  housingList,
  isHousing,
}) => {
  /*read 2 arrays, 1 for headings, 1 for options, each heading will be displayed with the corresponding housingData in 1 view*/
  const origin = "124 La Trobe St, Melbourne VIC 3000";
  const headings = headingList;
  const options = optionList;
  const [show, setShow] = useState(false);
  const [housingData, setHousingData] = useState(housingList);
  const filterMaxCardsPerPageInitial = 4;
  const filterMaxCardsPerPage = 4;
  const [filterMaxCards, setFilterMaxCards] = useState(
    filterMaxCardsPerPageInitial
  );
  // const filter = {};
  let filter = {};
  let addresses = [];
  housingList.map((housing) => {
    addresses.push(housing["address"]);
  });
  let distanceList = [];
  if (isHousing) distanceList = DistanceList(addresses, origin);
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
      {isHousing ? (
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
      ) : null}
      <View>
        {/*filter toggle btn */}
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
                  setHousingData([]);
                  let filterListLength = 0;
                  headings.map((heading) => {
                    if (filter[heading].length > 0) {
                      filterListLength++;
                    }
                  });
                  housingList.map((housing) => {
                    let added = 0;
                    let checked = 0;
                    let fromText = "";
                    headings.map((heading) => {
                      filter[heading].map((option) => {
                        if (
                          heading !== "distance from RMIT (km)" &&
                          added === 0
                        ) {
                          if (
                            heading === "price" &&
                            housing[heading].toString() &&
                            housing[heading]
                              .toString()
                              .split(" ")[0]
                              .toLowerCase() === "from"
                          ) {
                            fromText = "from";
                            console.log(housing["id"], housing[heading]);
                            housing[heading] = housing[heading]
                              .toString()
                              .split(" ")[1];
                          }
                          if (
                            option.includes("-") &&
                            option.slice(0, option.indexOf("-")) <=
                              housing[heading] &&
                            option.slice(
                              option.indexOf("-") + 1,
                              option.length
                            ) >= housing[heading]
                          ) {
                            checked++;
                          } else if (
                            option[option.length - 1] === "+" &&
                            option.slice(0, option.length - 1) <=
                              housing[heading]
                          ) {
                            checked++;
                          } else if (housing[heading] === option) {
                            checked++;
                          }
                          if (heading === "price" && fromText === "from") {
                            housing[heading] =
                              fromText + " " + housing[heading].toString();
                          }
                        }

                        if (
                          heading === "distance from RMIT (km)" &&
                          added === 0
                        ) {
                          let distance =
                            distanceList[housingList.indexOf(housing)];
                          console.log(distance);
                          if (
                            option.includes("-") &&
                            option.slice(0, option.indexOf("-")) <= distance &&
                            option.slice(
                              option.indexOf("-") + 1,
                              option.length
                            ) >= distance
                          ) {
                            checked++;
                          } else if (
                            option[option.length - 1] === "+" &&
                            option.slice(0, option.length - 1) <= distance
                          ) {
                            checked++;
                          }
                        }
                        if (filterListLength === checked) {
                          setHousingData((housingData) => [
                            ...housingData,
                            housing,
                          ]);
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
            extraData={housingData}
            data={housingData.slice(0, filterMaxCards)}
            horizontal={false}
            numColumns={1}
            renderItem={(info) => {
              if (isHousing) {
                return (
                  <RecommendationCard
                    key={info.index}
                    data={info.item}
                    housing={true}
                  />
                );
              } else
                return (
                  <RecommendationCard
                    key={info.index}
                    data={info.item}
                    housing={false}
                  />
                );
            }}
          />
        </SafeAreaView>

        <View style={styles.seeMoreBtnContainer}>
          {filterMaxCards >= housingData.length &&
          housingData.length >= filterMaxCardsPerPageInitial ? (
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

export default HousingFilter;
