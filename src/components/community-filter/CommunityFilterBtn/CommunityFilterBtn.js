import { TouchableWithoutFeedback, Text } from "react-native";
import { useEffect, useState } from "react";
import styles from "./styles";

const CommunityFilterBtn = ({ key, value, filter, heading, submitted }) => {
  const [selected, setSelected] = useState(filter[heading].includes(value));

  useEffect(() => {
    setSelected(filter[heading].includes(value));
  }, [submitted]);
  return (
    <TouchableWithoutFeedback
      key={key}
      onPress={() => {
        selected ? filter[heading].pop(value) : filter[heading].push(value);
        setSelected(filter[heading].includes(value));
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
