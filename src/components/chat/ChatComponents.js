import { Bubble, MessageText } from "react-native-gifted-chat";

import styles from "./styles";

// composer: rgba(250, 250, 250, 0.05)
// input bar: rgba(55, 55, 55, 0.8)

const renderBubble = (props) => {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        left: styles.bubbleLeft,
        right: styles.bubbleRight,
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

export { renderBubble, renderMessageText };
