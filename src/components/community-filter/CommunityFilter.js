import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import {
  DARK_BLUE,
  LIGHT_BLUE,
  SELECTED_BUTTON,
  WHITE,
} from "../../styles/colors";
import React, { useState } from "react";
import { SelectMultipleButton } from "react-native-selectmultiple-button";

const CommunityFilter = (props) => {
  /*read 2 arrays, 1 for headings, 1 for options, each heading will be displayed with the corresponding data in 1 view*/
  const headings = props.headings;
  const options = props.options;
  const [show, setShow] = useState(false);
  // const filter = {};
  const [filter, setFilter] = useState({});

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
                <View key={heading}>
                  <Text style={styles.filterText}>{heading}</Text>
                  {filter[heading].map((option) => {
                    return <Text>{option}</Text>;
                  })}
                  <View style={styles.optionWrapper}>
                    {optionList.map((option) => {
                      return (
                        <SelectMultipleButton
                          key={option.name}
                          buttonViewStyle={styles.optionBtn}
                          highLightStyle={{
                            borderColor: WHITE,
                            backgroundColor: "transparent",
                            textColor: WHITE,
                            borderTintColor: DARK_BLUE,
                            backgroundTintColor: SELECTED_BUTTON,
                            textTintColor: WHITE,
                          }}
                          value={option.name}
                          multiple={true}
                          selected={filter[heading].includes[option.name]}
                          singleTap={() => {
                            if (!filter[heading].includes(option.name)) {
                              filter[heading].push(option.name);
                            } else {
                              filter[heading].pop(option.name);
                              console.log(filter);
                            }
                          }}
                        />
                      );
                    })}
                  </View>
                </View>
              );
            })}
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default CommunityFilter;
