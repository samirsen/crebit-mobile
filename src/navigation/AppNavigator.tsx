import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainTabs } from './MainTabs';
import { AppStackParamList } from './AppNavigator/AppNavigator.types';
import { APP_NAVIGATOR_CONFIG } from './AppNavigator/AppNavigator.config';
import { useAppNavigatorController } from './AppNavigator/AppNavigator.controller';

const Stack = createStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  useAppNavigatorController();
  return (
    <Stack.Navigator screenOptions={APP_NAVIGATOR_CONFIG}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
};



