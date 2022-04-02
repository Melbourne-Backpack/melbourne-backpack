import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { LIGHT_BLUE } from "../../styles/colors";
import CommunityFilterBtn from "./CommunityFilterBtn/CommunityFilterBtn";
import React, { useState } from "react";

const CommunityFilter = (props) => {
  /*read 2 arrays, 1 for headings, 1 for options, each heading will be displayed with the corresponding data in 1 view*/
  const headings = props.headings;
  const options = props.options;
  const [show, setShow] = useState(false);
  // const filter = {};
  const [filter, setFilter] = useState({});
  const [submitted, setSubmitted] = useState({});

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
                  <View style={styles.optionWrapper}>
                    {optionList.map((option) => {
                      return (
                        <CommunityFilterBtn
                          key={option.id}
                          value={option.name}
                          filter={filter}
                          heading={heading}
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
                  setSubmitted(filter);
                  console.log(filter);
                }}
              >
                <Text style={styles.submitBtnText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default CommunityFilter;
