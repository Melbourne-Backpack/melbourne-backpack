import { View, Text } from "react-native";
import styles from "./styles";

const CommunityFilter = (props) => {
  const headings = props.headings;
  const options = props.options;
  let i = -1;
  return (
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
  );
};

export default CommunityFilter;
