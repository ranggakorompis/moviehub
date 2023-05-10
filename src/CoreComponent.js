import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginForm from './components/LoginForm/LoginForm';
import SignUp from './components/SignUp/SignUp';
import HomePage from './components/HomePage/HomePage';
import MovieAndSeriesDetailPage from './components/MovieAndSeriesDetailPage/MovieAndSeriesDetailPage';
import AccountPage from './components/AccountPage/AccountPage';

const Stack = createNativeStackNavigator();

const CoreComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginForm"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginForm" component={LoginForm} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen
          name="MovieAndSeriesDetailPage"
          component={MovieAndSeriesDetailPage}
        />
        <Stack.Screen name="AccountPage" component={AccountPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CoreComponent;
