import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const CommunityCardLarge = (props) => {
  return (
    <TouchableOpacity id={props.id} style={styles.card}>
      <Text>{props.name}</Text>
      <Text>{props.campus}</Text>
      <TouchableOpacity>
        <Text>Details</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CommunityCardLarge;
