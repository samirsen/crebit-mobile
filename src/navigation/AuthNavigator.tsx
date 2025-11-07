import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from './AuthNavigator/AuthNavigator.types';
import { AUTH_NAVIGATOR_CONFIG } from './AuthNavigator/AuthNavigator.config';
import { Landing } from '../screens/Landing/Landing.component';


const Stack = createStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={AUTH_NAVIGATOR_CONFIG}>
      <Stack.Screen name="Landing" component={Landing} />
    </Stack.Navigator>
  );
};




