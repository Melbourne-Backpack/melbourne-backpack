import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LIGHT_BLUE } from "../../../styles/colors";

import styles from "./styles";

const RecommendationFilter = () => {
  return (
    <View style={styles.filterBtn}>
      <Ionicons name="filter" size={24} color={LIGHT_BLUE} />
    </View>
  );
};

export default RecommendationFilter;
