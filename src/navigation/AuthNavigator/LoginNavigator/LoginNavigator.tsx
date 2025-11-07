import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN_NAVIGATOR_CONFIG} from './LoginNavigator.config';
import {LoginStackParamList} from './LoginNavigator.types';

// Screens
import {LoginScreen} from '../../../screens/Login/Login.screen';
import OtpVerificationScreen from '../../../screens/OtpVerification/OtpVerification.screen';

const Stack = createStackNavigator<LoginStackParamList>();

export const LoginNavigator = () => {
  return (
    <Stack.Navigator screenOptions={LOGIN_NAVIGATOR_CONFIG}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OtpVerification" component={OtpVerificationScreen} />
    </Stack.Navigator>
  );
};
