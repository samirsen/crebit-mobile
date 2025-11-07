import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { StyledText } from '../components/StyledText';

// Placeholder Login screen
const LoginScreen = () => (
  <View style={styles.container}>
    <StyledText style={styles.text}>Login Screen</StyledText>
  </View>
);

export type AuthStackParamList = {
  Login: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  text: {
    fontSize: 18,
    color: colors.text.primary,
  },
});



