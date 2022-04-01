import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/splash/SplashScreen";
import Welcome from "../screens/welcome/Welcome";
import Campus from "../screens/personalization/campus/Campus";
import Subject from "../screens/personalization/subject/Subject";
import HomeScreen from "../screens/home/HomeScreen";
import ContentNavigator from "./content-navigator/ContentNavigator";

const AppNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Campus" component={Campus} />
      <Stack.Screen name="Subject" component={Subject} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Main" component={ContentNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
