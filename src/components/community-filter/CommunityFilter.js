import { View, Text } from "react-native";

const CommunityFilter = (props) => {
  const headings = props.headings;
  const options = props.options;
  let i = -1;
  return (
    <View>
      {headings.map((heading) => {
        i++;
        console.log(i);
        console.log(headings[i]);
        console.log(headings);
        let optionList = options[i];
        return (
          <View>
            <Text style={{ color: "white" }}>{heading}</Text>
            {optionList.map((option) => {
              return (
                <Text style={{ color: "white" }} key={option.id}>
                  {option.name}
                </Text>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

export default CommunityFilter;
