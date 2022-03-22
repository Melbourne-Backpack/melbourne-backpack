import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const CommunityCardSmall = (props) => {
  return (
    <TouchableOpacity id={props.id} style={styles.card}>
      <TouchableOpacity>
        <Text>{props.name}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CommunityCardSmall;
