import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./src/screens/splash/SplashScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/home/HomeScreen";
import Welcome from "./src/screens/welcome/Welcome";
import HousingScreen from "./src/screens/recommendation/HousingScreen";
import ShoppingScreen from "./src/screens/recommendation/ShoppingScreen";
import TransportScreen from "./src/screens/recommendation/TransportScreen";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Housing" component={HousingScreen} />
        <Stack.Screen name="Shopping" component={ShoppingScreen} />
        <Stack.Screen name="Transport" component={TransportScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
