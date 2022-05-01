import {
  Actions,
  Bubble,
  Composer,
  InputToolbar,
  Message,
  MessageText,
  SystemMessage,
} from "react-native-gifted-chat";

import styles from "./styles";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BACKGROUND, PLACEHOLDER } from "../../styles/colors";

// composer: rgba(250, 250, 250, 0.05)
// input bar: rgba(55, 55, 55, 0.8)

const renderBubble = (props) => {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        left: [styles.bubbleLeft, styles.bubble],
        right: [styles.bubbleRight, styles.bubble],
      }}
    />
  );
};

const renderMessageText = (props) => {
  return (
    <MessageText
      {...props}
      textStyle={{
        left: styles.text,
        right: styles.text,
      }}
      linkStyle={{
        left: styles.link,
        right: styles.link,
      }}
    />
  );
};

const renderInputToolbar = (props) => {
  return (
    <InputToolbar
      {...props}
      containerStyle={styles.inputToolBar}
      primaryStyle={{ alignItems: "center" }}
    />
  );
};

const renderActions = (props) => {
  return (
    <Actions
      {...props}
      containerStyle={styles.action}
      icon={() => (
        <Ionicons name="image" size={28} color={"rgba(250, 250, 250, 0.6)"} />
      )}
      options={{
        "Choose From Library": () => {
          console.log("Choose From Library");
        },
        Cancel: () => {
          console.log("Cancel");
        },
      }}
      optionTintColor="#222B45"
    />
  );
};

const renderComposer = (props) => {
  return <Composer {...props} textInputStyle={styles.composer} />;
};

export {
  renderBubble,
  renderMessageText,
  renderInputToolbar,
  renderActions,
  renderComposer,
};
