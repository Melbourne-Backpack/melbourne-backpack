import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/splash/SplashScreen";
import Welcome from "../screens/welcome/Welcome";
import Campus from "../screens/personalization/campus/Campus";
import Subject from "../screens/personalization/subject/Subject";
import HomeScreen from "../screens/home/HomeScreen";
import ContentNavigator from "./content-navigator/ContentNavigator";
import Form from "../screens/personalization/form/Form";
import Ready from "../screens/personalization/ready/Ready";
import SignIn from "../screens/login/SignIn";
import SignUp from "../screens/login/SignUp";
import ForgotPassword from "../screens/login/ForgotPassword";
import EmailSent from "../screens/login/EmailSent";
import HousingDetailScreen from "../screens/housing-details/HousingDetailScreen";
import Profile from "../screens/profile/Profile";

const AppNavigator = () => {
  const Stack = createStackNavigator();

  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  return (
    <Stack.Navigator
      name={"Root"}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        cardStyleInterpolator: forFade,
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="EmailSent" component={EmailSent} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Campus" component={Campus} />
      <Stack.Screen name="Subject" component={Subject} />
      <Stack.Screen name="Form" component={Form} />
      <Stack.Screen name="Ready" component={Ready} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Content" component={ContentNavigator} />
      <Stack.Screen name="Details" component={HousingDetailScreen} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
