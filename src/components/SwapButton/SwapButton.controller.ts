import { useRef } from 'react';
import { Animated } from 'react-native';
import { SwapButtonState } from './SwapButton.types';

export const useSwapButtonController = (onPress: () => void): SwapButtonState & {
  handlePress: () => void;
} => {
  const rotateValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    // Scale animation on press
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    // Rotation animation
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      // Reset rotation value after animation
      rotateValue.setValue(0);
    });

    onPress();
  };

  return {
    rotateValue,
    scaleValue,
    handlePress,
  };
};
