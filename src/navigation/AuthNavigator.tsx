import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { StyledText } from '../components/StyledText';
import { AuthStackParamList } from './AuthNavigator/AuthNavigator.types';
import { AUTH_NAVIGATOR_CONFIG } from './AuthNavigator/AuthNavigator.config';
import { styles } from './AuthNavigator/AuthNavigator.styles';

// Placeholder Login screen
const LoginScreen = () => (
  <View style={styles.container}>
    <StyledText style={styles.text}>Login Screen</StyledText>
  </View>
);

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={AUTH_NAVIGATOR_CONFIG}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};




