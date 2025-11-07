import { ViewStyle } from 'react-native';
import { StatusType } from '../StatusBadge/StatusBadge.types';

export interface Transaction {
  id: string;
  recipient: string;
  amount: string;
  currency: string;
  date: string;
  time: string;
  status: StatusType;
  showReceipt?: boolean;
}

export interface TransactionHistoryProps {
  transactions: Transaction[];
  onViewReceipt?: (transactionId: string) => void;
  style?: ViewStyle;
}
