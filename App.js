import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./src/screens/splash/SplashScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/home/HomeScreen";
import Welcome from "./src/screens/welcome/Welcome";
import Campus from "./src/screens/personalization/campus/Campus";

import Subject from "./src/screens/personalization/subject/Subject";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Campus" component={Campus} />
        <Stack.Screen name="Subject" component={Subject} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
