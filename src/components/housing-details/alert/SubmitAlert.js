import Modal from "react-native-modal";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const SubmitAlert = ({ isVisible = false, setIsVisibleFunction }) => {
  const toggleModal = () => {
    setIsVisibleFunction(!isVisible);
  };

  return (
    <Modal
      isVisible={isVisible}
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
            <View style={styles.headerContainer}>
              <Image
                source={require("../../../../assets/success-icon.png")}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <Text style={styles.headerText}>SUCCESS</Text>
            </View>

            <Text style={styles.text}>Your review has been submitted!</Text>

            <TouchableOpacity
              onPress={() => toggleModal()}
              style={styles.cancelButton}
            >
              <Text style={styles.cancelButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SubmitAlert;
