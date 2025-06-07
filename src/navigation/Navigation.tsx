import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import {navigationRef} from '../utils/NavigationUtils';
import {RootStackParamList} from '../../types/navigation';
import HomeScreen from '../screens/HomeScreen';
import JoinScreen from '../screens/JoinScreen';
import PrepareScreen from '../screens/PrepareScreen';
import LiveScreen from '../screens/LiveScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
            animation: 'slide_from_bottom',
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="JoinScreen" component={JoinScreen} />
        <Stack.Screen name="PrepareScreen" component={PrepareScreen} />
        <Stack.Screen name="LiveScreen" component={LiveScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
