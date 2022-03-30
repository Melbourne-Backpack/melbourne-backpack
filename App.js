import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./src/screens/splash/SplashScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./src/screens/welcome/Welcome";
import Campus from "./src/screens/personalization/campus/Campus";
import Subject from "./src/screens/personalization/subject/Subject";

import { Text } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  const Stack = createStackNavigator();

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Campus" component={Campus} />
        <Stack.Screen name="Subject" component={Subject} />
        <Stack.Screen name="Main" component={AppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
