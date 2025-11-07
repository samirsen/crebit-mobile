import {ViewStyle, TextStyle, TextInputProps} from 'react-native';

export interface StyledInputBoxProps extends TextInputProps {
  label?: string;
  labelRequired?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  rightIconOnPress?: () => void;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  disabled?: boolean;
  loading?: boolean;
  error?: string;
  borderColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  padding?: number;
  height?: number;
  iconSize?: number;
  iconColor?: string;
  onSubmitEditing?: () => void;
  onFocus?: () => void;
}
