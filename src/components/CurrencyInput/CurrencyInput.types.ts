import { ViewStyle } from 'react-native';

export interface CurrencyInputProps {
  label: string;
  amount: string;
  currency: {
    flag: string;
    code: string;
  };
  isEditable?: boolean;
  onAmountChange?: (amount: string) => void;
  onCurrencyPress?: () => void;
  placeholder?: string;
  style?: ViewStyle;
}
