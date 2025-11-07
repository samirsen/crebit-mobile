import { ViewStyle } from 'react-native';

export interface ServiceComparisonCardProps {
  serviceName: string;
  rate: string;
  transferFee: string;
  transferTime: string;
  isHighlighted?: boolean;
  style?: ViewStyle;
}
