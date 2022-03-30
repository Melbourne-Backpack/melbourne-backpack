import HomeScreen from "../screens/home/HomeScreen";
import HousingScreen from "../screens/recommendation/HousingScreen";
import TransportScreen from "../screens/recommendation/TransportScreen";
import ShoppingScreen from "../screens/recommendation/ShoppingScreen";
import CommunityScreen from "../screens/community/CommunityScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BACKGROUND,
  LIGHT_PURPLE,
  LIGHTER_GREY,
  PURPLE_BLUE,
  WHITE,
} from "../styles/colors";

const Tab = createBottomTabNavigator();

// TODO: move styling to another file
const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: LIGHT_PURPLE,
        tabBarInactiveTintColor: LIGHTER_GREY,
        headerShown: false,
        tabBarStyle: {
          borderTopColor: WHITE,
          backgroundColor: BACKGROUND,
          position: "absolute",
          bottom: 0,
          paddingTop: 10,
          marginBottom: 7,
          zIndex: 8,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Housing" component={HousingScreen} />
      <Tab.Screen name="Transport" component={TransportScreen} />
      <Tab.Screen name="Shopping" component={ShoppingScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
