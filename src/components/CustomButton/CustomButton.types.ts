import { GestureResponderEvent, ImageSourcePropType, ViewStyle, TextStyle, DimensionValue } from 'react-native';

export interface CustomButtonProps {
  text?: string;
  onPress?: (event: GestureResponderEvent) => void;
  gradientColors?: string[];
  backgroundColor?: string;
  textColor?: string;
  width?: DimensionValue;
  height?: number;
  borderRadius?: number;
  fontSize?: number;
  fontWeight?: TextStyle['fontWeight'];
  leftIcon?: string;
  rightIcon?: string;
  middleIcon?: string;
  iconSize?: number;
  iconColor?: string;
  imageSource?: ImageSourcePropType;
  isLoading?: boolean;
  disabled?: boolean;
  withShadow?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
  borderWidth?: number;
  borderColor?: string;
  padding?: number;
}

export interface CustomButtonState {
  scaleValue: any; // Animated.Value
}
