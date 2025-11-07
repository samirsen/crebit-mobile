import { ViewStyle } from 'react-native';

export interface SwipeToPayButtonProps {
  onSwipeComplete?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  amount?: string;
  currency?: string;
  resetOnComplete?: boolean;
}

export interface SwipeToPayButtonState {
  isCompleted: boolean;
  isAnimating: boolean;
}

export interface ButtonDimensions {
  buttonWidth: number;
  thumbSize: number;
  maxSwipeDistance: number;
}
