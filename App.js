import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./src/screens/splash/SplashScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./src/screens/welcome/Welcome";
import HousingScreen from "./src/screens/recommendation/HousingScreen";
import ShoppingScreen from "./src/screens/recommendation/ShoppingScreen";
import TransportScreen from "./src/screens/recommendation/TransportScreen";
import CommunityScreen from "./src/screens/community/CommunityScreen";
import Campus from "./src/screens/personalization/campus/Campus";
import Subject from "./src/screens/personalization/subject/Subject";
import { Text } from "react-native";
import Form from "./src/screens/personalization/form/Form";
import Ready from "./src/screens/personalization/ready/Ready";
import SignIn from "./src/screens/login/SignIn";
import SignUp from "./src/screens/login/SignUp";
import ForgotPassword from "./src/screens/login/ForgotPassword";
import EmailSent from "./src/screens/login/EmailSent";

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
        {/*<Stack.Screen name="Splash" component={SplashScreen} />*/}
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name={"ForgotPassword"} component={ForgotPassword} />
        <Stack.Screen name={"EmailSent"} component={EmailSent} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Campus" component={Campus} />
        <Stack.Screen name="Subject" component={Subject} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Ready" component={Ready} />
        <Stack.Screen name="Housing" component={HousingScreen} />
        <Stack.Screen name="Shopping" component={ShoppingScreen} />
        <Stack.Screen name="Transport" component={TransportScreen} />
        <Stack.Screen name="Community" component={CommunityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
