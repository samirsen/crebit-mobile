import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAppSelector } from '../hooks/useAppSelector';
import { AppNavigator } from './AppNavigator';
import { AuthNavigator } from './AuthNavigator';

export const RootNavigator = () => {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

  return (
    <NavigationContainer
      // Enable iOS back gesture navigation at root level
      onReady={() => {
        // Ensure proper gesture handling is enabled
      }}
    >
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};



