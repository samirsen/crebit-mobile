import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {AppNavigator} from './AppNavigator';
import {AuthNavigator} from './AuthNavigator';
import {useRootNavigatorController} from './RootNavigator/RootNavigator.controller';
import {ROOT_NAVIGATOR_CONFIG} from './RootNavigator/RootNavigator.config';

export const RootNavigator = () => {
  // const { isAuthenticated } = useRootNavigatorController();
  const isAuthenticated = false;

  return (
    <>
      <StatusBar
        barStyle={ROOT_NAVIGATOR_CONFIG.statusBar.barStyle}
        backgroundColor={ROOT_NAVIGATOR_CONFIG.statusBar.backgroundColor}
        translucent={ROOT_NAVIGATOR_CONFIG.statusBar.translucent}
      />
      <NavigationContainer
        theme={ROOT_NAVIGATOR_CONFIG.navigationContainer.theme}
        onReady={() => {
          // Navigation container ready
        }}>
        {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
};
