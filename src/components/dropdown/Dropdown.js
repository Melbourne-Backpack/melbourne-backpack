import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import { PLACEHOLDER, WHITE } from "../../styles/colors";

const Dropdown = ({ data = [], value = {}, onSelected = () => {} }) => {
  const [showOption, setShowOption] = useState(false);
  const showOptionSwitch = () => {
    setShowOption(!showOption);
  };

  const onSelectedItem = (val) => {
    setShowOption(false);
    onSelected(val);
  };
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.dropdown} onPress={showOptionSwitch}>
        <Text
          style={{
            color: !!value ? WHITE : PLACEHOLDER,
            fontFamily: "PoppinsMedium",
          }}
        >
          {!!value ? value : "Why are you using this app"}
        </Text>
        <Image
          source={require("../../../assets/Chevron-down.png")}
          style={{ transform: [{ rotate: showOption ? "180deg" : "0deg" }] }}
        />
      </TouchableOpacity>
      {showOption && (
        <View>
          {data.map((val) => {
            return (
              <TouchableOpacity key={val} onPress={() => onSelectedItem(val)}>
                <Text style={{ color: WHITE }}>{val}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default Dropdown;
