import { ViewStyle } from 'react-native';

export type StatusType = 'processing' | 'completed' | 'failed' | 'pending';

export interface StatusBadgeProps {
  status: StatusType;
  leftIcon?: string;
  rightIcon?: string;
  iconOnly?: boolean;
  textOnly?: boolean;
  style?: ViewStyle;
}

export interface StatusConfig {
  text: string;
  backgroundColor: string;
  textColor: string;
  iconColor: string;
}
