import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const CommunityFilter = (props) => {
  return (
    <View style={styles.filterWrapper}>
      <View>
        <Text style={styles.filterText}>{props.name}</Text>
        <View style={styles.optionWrapper}>
          {props.data.map((option) => {
            return (
              <TouchableOpacity key={option.id} style={{ color: "#ffffff" }}>
                {option.name}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default CommunityFilter;
