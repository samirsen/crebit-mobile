import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { colors } from '../constants/colors';
import { HomeScreen } from '../screens/Home';
import { TransferScreen } from '../screens/Transfer';
import { AccountComponent } from '../screens/Account';
import CustomIcon from '../components/CustomIcon/CustomIcon';
import { StyledText } from '../components/StyledText';

export type MainTabsParamList = {
  Home: undefined;
  Transfer: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<MainTabsParamList>();

export const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#868686',

        tabBarStyle: {
          position: 'absolute',
          left: 10,
          right: 10,
          bottom: 0,
          backgroundColor: colors.surface, // background handled by tabBarBackground
          borderTopWidth: 0.5,

          // Rounded corners
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,

          // Layout
          height: 90,
          paddingTop: 8,
          paddingHorizontal: 10,
          flexDirection: 'row',
          gap: 80,

          // ✅ Soft blue shadow (similar to box-shadow: 0 0 8px -1px #D9D9D980
          shadowColor: '#D9D9D980', // Blue tint
          shadowOffset: { width: 4, height: 4 }, // Slight downward offset
          shadowOpacity: 0.4,
          shadowRadius: 8,
          elevation: 8, // Android support (matches shadow spread)
        },

        // ✅ Background with rounded corners
        tabBarBackground: () => (
          <View
            style={{
              flex: 1,
              backgroundColor: colors.surface,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          />
        ),

        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },

        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 4,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <StyledText color={color} fontSize={12}>Home</StyledText>
          ),
          tabBarIcon: ({ color, size }) => (
            <CustomIcon name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Transfer"
        component={TransferScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <StyledText color={color} fontSize={12}>Transfer</StyledText>
          ),
          tabBarIcon: ({ color, size }) => (
            <CustomIcon name="transfer" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountComponent}
        options={{
          tabBarLabel: ({ color }) => (
            <StyledText color={color} fontSize={12}>Account</StyledText>
          ),
          tabBarIcon: ({ color, size }) => (
            <CustomIcon name="accountIcon" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
