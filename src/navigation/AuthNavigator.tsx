// import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
// import {AuthStackParamList} from './AuthNavigator/AuthNavigator.types';
// import {AUTH_NAVIGATOR_CONFIG} from './AuthNavigator/AuthNavigator.config';
// import {Landing} from '../screens/Landing/Landing.screen';
// import {SignUpScreen} from '../screens/SignUp/SignUp.screen';
// import {CreatePasswordScreen} from '../screens/CreatePassword';
// import OtpVerificationScreen from '../screens/OtpVerification/OtpVerification.screen';
// import {AdditionalInfoScreen} from '../screens/AdditionalInfo';
// import {SignUpCompleteScreen} from '../screens/SignUpComplete/SignUpComplete.screen';

// const Stack = createStackNavigator<AuthStackParamList>();

// export const AuthNavigator = () => {
//   return (
//     <Stack.Navigator screenOptions={AUTH_NAVIGATOR_CONFIG}>
//       <Stack.Screen name="Landing" component={Landing} />
//       <Stack.Screen name="SignUp" component={SignUpScreen} />
//       <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
//       <Stack.Screen name="OtpVerification" component={OtpVerificationScreen} />
//       <Stack.Screen name="AdditionalInfo" component={AdditionalInfoScreen} />
//       <Stack.Screen name="SignUpComplete" component={SignUpCompleteScreen} />
//       {/* <Stack.Screen name="Login" component={Login} /> */}
//     </Stack.Navigator>
//   );
// };

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackParamList} from './AuthNavigator/AuthNavigator.types';
import {AUTH_NAVIGATOR_CONFIG} from './AuthNavigator/AuthNavigator.config';

// Screens
import {Landing} from '../screens/Landing/Landing.screen';

// Nested navigators
import {SignUpNavigator} from './AuthNavigator/SignUpNavigator/SignUpNavigator';
import {LoginNavigator} from './AuthNavigator/LoginNavigator/LoginNavigator';

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={AUTH_NAVIGATOR_CONFIG}>
      {/* Entry Screen */}
      <Stack.Screen name="Landing" component={Landing} />

      {/* Sign Up Flow */}
      <Stack.Screen
        name="SignUpFlow"
        component={SignUpNavigator}
        options={{headerShown: false}}
      />

      {/* Login Flow */}
      <Stack.Screen
        name="LoginFlow"
        component={LoginNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
