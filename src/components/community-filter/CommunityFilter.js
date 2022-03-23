import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useState } from "react";

const CommunityFilter = (props) => {
  const headings = props.headings;
  const options = props.options;
  const [show, setShow] = useState(false);
  let i = -1;
  return (
    <View>
      <TouchableOpacity style={styles.filterBtn} onPress={() => setShow(!show)}>
        <Text style={{ color: "#ffffff" }}>Filter</Text>
      </TouchableOpacity>
      <View>
        {show ? (
          <View>
            {headings.map((heading) => {
              i++;
              let optionList = options[i];
              return (
                <View>
                  <Text style={styles.filterText}>{heading}</Text>
                  <View style={styles.optionWrapper}>
                    {optionList.map((option) => {
                      return (
                        <View style={styles.filterWrapper}>
                          <Text style={styles.filterText} key={option.id}>
                            {option.name}
                          </Text>
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
