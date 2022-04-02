import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LIGHT_BLUE } from "../../../styles/colors";

import styles from "./styles";

const RecommendationFilter = () => {
  return (
    <View>
      <TouchableOpacity style={styles.filterBtn}>
        <Ionicons name="filter" size={24} color={LIGHT_BLUE} />
      </TouchableOpacity>
    </View>
  );
};

export default RecommendationFilter;
