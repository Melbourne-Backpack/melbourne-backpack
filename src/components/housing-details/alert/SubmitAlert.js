import Modal from "react-native-modal";
import { Text, View } from "react-native";
import styles from "./styles";

const SubmitAlert = () => {
  return (
    <Modal
      isVisible={true}
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
            <Text style={styles.text}>Your review has been submitted!</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SubmitAlert;
