import HousingScreen from "../../screens/recommendation/HousingScreen";
import TransportScreen from "../../screens/recommendation/TransportScreen";
import ShoppingScreen from "../../screens/recommendation/ShoppingScreen";
import CommunityScreen from "../../screens/community/CommunityScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import styles from "./styles";
import { LIGHT_PURPLE, LIGHTER_GREY } from "../../styles/colors";

const Tab = createBottomTabNavigator();

const ContentNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: LIGHT_PURPLE,
        tabBarInactiveTintColor: LIGHTER_GREY,
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen name="Housing" component={HousingScreen} />
      <Tab.Screen name="Transport" component={TransportScreen} />
      <Tab.Screen name="Shopping" component={ShoppingScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
    </Tab.Navigator>
  );
};

export default ContentNavigator;
