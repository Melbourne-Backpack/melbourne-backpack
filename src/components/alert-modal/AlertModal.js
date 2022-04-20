import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import { PLACEHOLDER, WHITE } from "../../styles/colors";
import Modal from "react-native-modal";

const AlertModal = ({
  showModal = false,
  setShowModalFunction = () => {},
  message = "",
}) => {
  const toggleModal = () => {
    setShowModalFunction(!showModal);
  };
  return (
    <Modal
      isVisible={showModal}
      onBackdropPress={() => setShowModalFunction(false)}
      animationIn={"fadeInLeftBig"}
      animationOut={"fadeOutRightBig"}
    >
      <View style={styles.alertContainer}>
        <View style={styles.alertModal}>
          <View
            style={{
              width: "100%",
            }}
          >
            <Text
              style={{
                color: "#FAC800",
                paddingTop: 20,
                fontFamily: "PoppinsBlack",
                fontSize: 17,
                textAlign: "center",
              }}
            >
              ALERT
            </Text>
            <Text style={styles.errorMessage}>{message}</Text>
          </View>

          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;
