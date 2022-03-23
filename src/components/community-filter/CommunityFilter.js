import { View, Text } from "react-native";
import styles from "./styles";

const CommunityFilter = (props) => {
  return (
    <View style={styles.filterWrapper}>
      <View>
        <Text>{props.name}</Text>
        {props.data.map((option) => {
          return (
            <Text key={option.id} style={{ color: "#ffffff" }}>
              {option.name}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

export default CommunityFilter;
