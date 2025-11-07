import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainTabs} from './MainTabs';
import {RootStackParamList} from './RootNavigator/RootNavigator.types';
import {Root_NAVIGATOR_CONFIG} from './RootNavigator/RootNavigator.config';
// import {useRootNavigatorController} from './RootNavigator/RootNavigator.controller';

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  // useRootNavigatorController();
  return (
    <Stack.Navigator screenOptions={Root_NAVIGATOR_CONFIG}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
};
