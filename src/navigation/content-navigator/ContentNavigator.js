import HousingScreen from "../../screens/recommendation/HousingScreen";
import TransportScreen from "../../screens/recommendation/TransportScreen";
import ShoppingScreen from "../../screens/recommendation/ShoppingScreen";
import CommunityScreen from "../../screens/community/CommunityScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";

import styles from "./styles";
import { LIGHT_PURPLE, LIGHTER_GREY } from "../../styles/colors";

const Tab = createBottomTabNavigator();

const tabIcons = [
  {
    route: "Housing",
    iconName: "home-outline",
    iconFocus: "home",
  },
  {
    route: "Transport",
    iconName: "train-outline",
    iconFocus: "train",
  },
  {
    route: "Shopping",
    iconName: "md-cart-outline",
    iconFocus: "md-cart",
  },
  {
    route: "Community",
    iconName: "md-people-outline",
    iconFocus: "md-people",
  },
];

const ContentNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName, iconColor, icon;
          let iconSize = focused ? 38 : 28;

          tabIcons.map((tabIcon) => {
            if (route.name === tabIcon.route) {
              // if (route.name === "Community") {
              //   icon = (
              //     <Image
              //       source={require("../../../assets/images/avatar-clone.jpg")}
              //       style={
              //         focused
              //           ? {
              //               width: iconSize,
              //               height: iconSize,
              //               borderRadius: 50,
              //               borderColor: LIGHT_PURPLE,
              //               borderWidth: 3,
              //             }
              //           : {
              //               width: iconSize,
              //               height: iconSize,
              //               borderRadius: 50,
              //             }
              //       }
              //     />
              //   );
              // } else {
              iconName = focused ? tabIcon.iconFocus : tabIcon.iconName;
              iconColor = focused ? LIGHT_PURPLE : LIGHTER_GREY;
              icon = (
                <Ionicons name={iconName} size={iconSize} color={iconColor} />
              );
            }
            // }
          });
          return icon;
        },
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Housing" component={HousingScreen} />
      <Tab.Screen name="Transport" component={TransportScreen} />
      <Tab.Screen name="Shopping" component={ShoppingScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
    </Tab.Navigator>
  );
};

export default ContentNavigator;
