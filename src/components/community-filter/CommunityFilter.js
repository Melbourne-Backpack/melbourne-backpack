import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { LIGHT_BLUE } from "../../styles/colors";
import { useState } from "react";

const CommunityFilter = (props) => {
  const headings = props.headings;
  const options = props.options;
  const [show, setShow] = useState(false);
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
        {show ? (
          <View>
            {headings.map((heading) => {
              i++;
              let optionList = options[i];
              return (
                <View key={heading}>
                  <Text style={styles.filterText}>{heading}</Text>
                  <View style={styles.optionWrapper}>
                    {optionList.map((option) => {
                      return (
                        <View style={styles.filterWrapper} key={option.id}>
                          <Text style={styles.filterText}>{option.name}</Text>
                        </View>
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
