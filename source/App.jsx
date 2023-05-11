import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import {
  Login,
  SignUp,
  Home,
  MovieSeries,
  Account
} from './screens';



const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='MovieSeries' component={MovieSeries} />
        <Stack.Screen name='Account' component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
