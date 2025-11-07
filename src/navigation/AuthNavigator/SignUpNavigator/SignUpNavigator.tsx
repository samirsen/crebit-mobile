import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SIGNUP_NAVIGATOR_CONFIG} from './SignUpNavigator.config';
import {SignUpStackParamList} from './SignUpNavigator.types';

// Screens
import {SignUpScreen} from '../../../screens/SignUp/SignUp.screen';
import OtpVerificationScreen from '../../../screens/OtpVerification/OtpVerification.screen';
import {CreatePasswordScreen} from '../../../screens/CreatePassword';
import {AdditionalInfoScreen} from '../../../screens/AdditionalInfo';
import {SignUpCompleteScreen} from '../../../screens/SignUpComplete/SignUpComplete.screen';

const Stack = createStackNavigator<SignUpStackParamList>();

export const SignUpNavigator = () => {
  return (
    <Stack.Navigator screenOptions={SIGNUP_NAVIGATOR_CONFIG}>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="OtpVerification" component={OtpVerificationScreen} />
      <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
      <Stack.Screen name="AdditionalInfo" component={AdditionalInfoScreen} />
      <Stack.Screen name="SignUpComplete" component={SignUpCompleteScreen} />
    </Stack.Navigator>
  );
};
