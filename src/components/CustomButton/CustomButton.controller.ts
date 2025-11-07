import { useRef } from 'react';
import { Animated } from 'react-native';
import { CustomButtonState } from './CustomButton.types';

export const useCustomButtonController = (): CustomButtonState & {
  handlePressIn: () => void;
  handlePressOut: () => void;
} => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return {
    scaleValue,
    handlePressIn,
    handlePressOut,
  };
};
