import { Text, TouchableOpacity } from "react-native";

const CommunityCardSmall = (props) => {
  return (
    <TouchableOpacity id={props.id}>
      <TouchableOpacity>
        <Text>{props.name}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CommunityCardSmall;
