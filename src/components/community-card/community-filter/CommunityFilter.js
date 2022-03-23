import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const CommunityFilter = () => {
  const [campus, setCampus] = useState([
    {
      id: 1,
      name: "SGS campus",
    },
    {
      id: 2,
      name: "Hanoi campus",
    },
    {
      id: 3,
      name: "Danang campus",
    },
  ]);

  const [topic, setTopic] = useState([
    {
      id: 1,
      name: "Economics",
    },
    {
      id: 2,
      name: "Business",
    },
    {
      id: 3,
      name: "Robotics",
    },
    {
      id: 4,
      name: "Management",
    },
    {
      id: 5,
      name: "Aviation",
    },
    {
      id: 6,
      name: "Education",
    },
    {
      id: 7,
      name: "Design",
    },
    {
      id: 8,
      name: "Professional Communication",
    },
    {
      id: 9,
      name: "Technology",
    },
    {
      id: 10,
      name: "Digital Marketing",
    },
  ]);

  return (
    <View style={styles.filterWrapper}>
      <View>
        <Text>Campus</Text>
        {campus.map((campus) => {
          return (
            <Text key={campus.id} style={{ color: "#ffffff" }}>
              {campus.name}
            </Text>
          );
        })}
      </View>

      <View>
        <Text>Topic</Text>
        {topic.map((topic) => {
          return (
            <Text key={topic.id} style={{ color: "#ffffff" }}>
              {topic.name}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

export default CommunityFilter;
