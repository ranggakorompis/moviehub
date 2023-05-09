import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginForm from './components/LoginForm/LoginForm';
import SignUp from './components/SignUp/SignUp';

const Stack = createNativeStackNavigator();

const CoreComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginForm"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginForm" component={LoginForm} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CoreComponent;
