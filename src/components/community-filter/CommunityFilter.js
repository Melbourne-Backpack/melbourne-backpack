import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { LIGHT_BLUE } from "../../styles/colors";
import { useState } from "react";

let width = Dimensions.get("window").width;
let responsiveSize = (width * 24) / 375;
if (width <= 370) {
  responsiveSize = (responsiveSize * 5) / 8;
}

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
            size={responsiveSize}
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
