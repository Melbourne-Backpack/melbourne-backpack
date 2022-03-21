import { Text, TouchableOpacity } from "react-native";

const CommunityCardLarge = (props) => {
  return (
    <TouchableOpacity id={props.id}>
      <Text>{props.name}</Text>
      <Text>{props.campus}</Text>
      <TouchableOpacity>
        <Text>Details</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CommunityCardLarge;
