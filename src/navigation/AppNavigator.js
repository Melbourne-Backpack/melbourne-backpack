import HomeScreen from "../screens/home/HomeScreen";
import HousingScreen from "../screens/recommendation/HousingScreen";
import TransportScreen from "../screens/recommendation/TransportScreen";
import ShoppingScreen from "../screens/recommendation/ShoppingScreen";
import CommunityScreen from "../screens/community/CommunityScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabNavigatorConfig = {
  initialRouteName: "Home",
  header: null,
  headerMode: "none",
};

const Routes = {
  Home: HomeScreen,
  Housing: HousingScreen,
  Transport: TransportScreen,
  Shopping: ShoppingScreen,
  Community: CommunityScreen,
};

const AppNavigator = createBottomTabNavigator(Routes, BottomTabNavigatorConfig);
