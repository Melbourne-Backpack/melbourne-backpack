import ChatMessageScreen from "../../screens/chat/chat-messages/ChatMessageScreen";
import { createStackNavigator } from "@react-navigation/stack";

const ChatMessageNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatMessage"
        component={ChatMessageScreen}
        options={{ headerBackTitle: "Back" }}
      />
    </Stack.Navigator>
  );
};

export default ChatMessageNavigator;
