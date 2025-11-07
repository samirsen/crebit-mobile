import { ViewStyle } from 'react-native';

export interface SwapButtonProps {
  onPress: () => void;
  style?: ViewStyle;
}

export interface SwapButtonState {
  rotateValue: any; // Animated.Value
  scaleValue: any; // Animated.Value
}
