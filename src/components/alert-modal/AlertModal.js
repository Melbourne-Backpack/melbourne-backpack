import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import React, { useState } from "react";
import { PLACEHOLDER, WHITE } from "../../styles/colors";
import Modal from "react-native-modal";

const AlertModal = ({
  navigation,
  showModal = false,
  setShowModalFunction = () => {},
  message = "",
  icon = "",
  doNavigate = false,
  toPage = "",
  signOut,
}) => {
  const toggleModal = () => {
    setShowModalFunction(!showModal);
  };

  const navigate = () => {
    setShowModalFunction(!showModal);
    navigation.navigate(toPage);
  };
  return (
    <Modal
      isVisible={showModal}
      onBackdropPress={
        icon === "success" ? null : () => setShowModalFunction(false)
      }
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
    >
      <View style={styles.alertContainer}>
        <View style={styles.alertModal}>
          <View
            style={{
              width: "100%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 20,
              }}
            >
              {icon === "alert" && (
                <Image
                  source={require("../../../assets/alert-icon.png")}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              )}
              {icon === "success" && (
                <Image
                  source={require("../../../assets/success-icon.png")}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              )}
              {icon === "logout" && (
                <Image
                  source={require("../../../assets/logout-icon.png")}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              )}
              {icon === "alert" && (
                <Text
                  style={{
                    color: "#FAC800",
                    fontFamily: "PoppinsBlack",
                    fontSize: 17,
                    marginHorizontal: 5,
                  }}
                >
                  ALERT
                </Text>
              )}

              {icon === "success" && (
                <Text
                  style={{
                    color: "#12622F",
                    fontFamily: "PoppinsBlack",
                    fontSize: 18,
                    marginHorizontal: 5,
                  }}
                >
                  SUCCESS
                </Text>
              )}
              {icon === "logout" && (
                <Text
                  style={{
                    color: "#CB363F",
                    fontFamily: "PoppinsBlack",
                    fontSize: 18,
                    marginHorizontal: 5,
                  }}
                >
                  LOG OUT
                </Text>
              )}
            </View>
            <Text style={styles.errorMessage}>{message}</Text>
          </View>

          {icon === "alert" && (
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          )}

          {icon === "logout" && (
            <View>
              <TouchableOpacity
                onPress={() => signOut({ navigation })}
                style={styles.logoutButton}
              >
                <Text style={styles.logoutButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={toggleModal}
                style={styles.cancelButton}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;
