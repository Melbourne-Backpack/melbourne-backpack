import {
  Actions,
  Bubble,
  InputToolbar,
  Message,
  MessageText,
  SystemMessage,
} from "react-native-gifted-chat";

import styles from "./styles";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// composer: rgba(250, 250, 250, 0.05)
// input bar: rgba(55, 55, 55, 0.8)

const renderSystemMessage = (props) => (
  <SystemMessage {...props} containerStyle={{ marginBottom: 50 }} />
);

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

const renderMessage = (props) => {
  return (
    <Message
      {...props}
      containerStyle={{
        left: styles.messageContainer,
        right: styles.messageContainer,
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
      containerStyle={{
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 4,
        marginRight: 4,
        marginBottom: 0,
      }}
      icon={() => (
        <Ionicons
          name="image-outline"
          size={24}
          color={"rgba(250, 250, 250, 0.6)"}
        />
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

export {
  renderBubble,
  renderMessage,
  renderMessageText,
  renderInputToolbar,
  renderActions,
  renderSystemMessage,
};
