import { TouchableWithoutFeedback, Text } from "react-native";
import { useState } from "react";
import styles from "./styles";

const CommunityFilterBtn = ({ key, value, filter, heading }) => {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableWithoutFeedback
      key={key}
      onPress={() => {
        selected ? filter[heading].pop(value) : filter[heading].push(value);
        setSelected(!selected);
        console.log(filter);
      }}
      style={styles.btnWrapper}
    >
      <Text style={selected ? styles.selectedText : styles.notSelectedText}>
        {value}
      </Text>
    </TouchableWithoutFeedback>
  );
};

export default CommunityFilterBtn;
