// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {StatusBar} from 'react-native';
// import {RootNavigator} from './RootNavigator';
// import {AuthNavigator} from './AuthNavigator';
// import {useAppNavigatorController} from './AppNavigator/AppNavigator.controller';
// import {APP_NAVIGATOR_CONFIG} from './AppNavigator/AppNavigator.config';

// export const AppNavigator = () => {
//   const {isAuthenticated} = useAppNavigatorController();
//   // const isAuthenticated = false;

//   return (
//     <>
//       <StatusBar
//         barStyle={APP_NAVIGATOR_CONFIG.statusBar.barStyle}
//         // backgroundColor={APP_NAVIGATOR_CONFIG.statusBar.backgroundColor}
//         translucent={APP_NAVIGATOR_CONFIG.statusBar.translucent}
//       />
//       <NavigationContainer
//         // theme={ROOT_NAVIGATOR_CONFIG.navigationContainer.theme}
//         onReady={() => {
//           // Navigation container ready
//         }}>
//         {isAuthenticated ? <RootNavigator /> : <AuthNavigator />}
//       </NavigationContainer>
//     </>
//   );
// };
import React, {useEffect, useState, useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {RootNavigator} from './RootNavigator';
import {AuthNavigator} from './AuthNavigator';
import {useAppNavigatorController} from './AppNavigator/AppNavigator.controller';
import {APP_NAVIGATOR_CONFIG} from './AppNavigator/AppNavigator.config';
import AppLoader from '../components/AppLoader/AppLoader.component';

export const AppNavigator = () => {
  const {isAuthenticated} = useAppNavigatorController();
  const [isNavReady, setIsNavReady] = useState(false);

  const handleReady = useCallback(() => {
    setIsNavReady(true);
  }, []);

  useEffect(() => {
    return () => setIsNavReady(false);
  }, []);

  // If Redux hasn’t yet provided auth info (null/undefined), show loader
  const isAuthResolved = typeof isAuthenticated === 'boolean';

  if (!isAuthResolved) {
    return <AppLoader />;
  }

  return (
    <>
      {/* ✅ Status bar setup */}
      <StatusBar
        barStyle={APP_NAVIGATOR_CONFIG.statusBar.barStyle}
        translucent={APP_NAVIGATOR_CONFIG.statusBar.translucent}
      />

      {/* ✅ Always render NavigationContainer */}
      <NavigationContainer onReady={handleReady}>
        {isAuthenticated ? <RootNavigator /> : <AuthNavigator />}
      </NavigationContainer>

      {/* ✅ Loader overlay while navigation initializing */}
      {!isNavReady && <AppLoader />}
    </>
  );
};
