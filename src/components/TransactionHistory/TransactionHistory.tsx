import React, { useMemo } from 'react';
import {
  View,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { StyledText } from '../StyledText';
import { StatusBadge, StatusType } from '../StatusBadge';

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

export const TransactionHistory: React.FC<TransactionHistoryProps> = React.memo(({
  transactions,
  onViewReceipt,
  style,
}) => {
  const memoizedTransactions = useMemo(() => transactions, [transactions]);

  const renderTransaction = (transaction: Transaction) => (
    <View key={transaction.id} style={styles.transactionCard}>
      <View style={styles.transactionHeader}>
        <StyledText style={styles.recipientText}>
          Payout to {transaction.recipient}
        </StyledText>
        <View style={styles.rightSection}>
          {transaction.showReceipt && (
            <TouchableOpacity
              onPress={() => onViewReceipt?.(transaction.id)}
              style={styles.receiptButton}
            >
              <StyledText style={styles.receiptText}>View Receipt</StyledText>
            </TouchableOpacity>
          )}
          <StatusBadge 
            status={transaction.status} 
            textOnly 
            style={styles.statusBadge}
          />
        </View>
      </View>
      
      <StyledText style={[
        styles.amountText,
        { color: transaction.status === 'processing' ? '#B47300' : '#003233' }
      ]}>
        $ {transaction.amount} {transaction.currency}
      </StyledText>
      
      <StyledText style={styles.dateText}>
        {transaction.date} at {transaction.time}
      </StyledText>
    </View>
  );

  return (
    <View style={[styles.container, style]}>
      <StyledText style={styles.title}>Transaction History</StyledText>
      <View style={styles.scrollContainer}>
        <View style={styles.scrollContent}>
          {memoizedTransactions.map(renderTransaction)}
        </View>
      </View>
    </View>
  );
});

TransactionHistory.displayName = 'TransactionHistory';

const styles = {
  container: {
    width: 361,
    minHeight: 435,
    gap: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#F7F7F7',
  } as ViewStyle,
  title: {
    fontFamily: 'Satoshi',
    fontWeight: '700' as const,
    fontSize: 28,
    lineHeight: 28,
    letterSpacing: -1.12, // -4%
    color: '#003233',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  scrollContent: {
    gap: 12,
  },
  transactionCard: {
    width: 310,
    minHeight: 113,
    borderRadius: 15,
    padding: 20,
    gap: 8,
    borderWidth: 0.4,
    backgroundColor: '#FFFFFF',
    borderColor: '#CDCDCD',
  } as ViewStyle,
  transactionHeader: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'flex-start' as const,
  },
  recipientText: {
    fontFamily: 'Satoshi',
    fontWeight: '700' as const,
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: -0.24, // -2%
    color: '#003233',
    flex: 1,
  },
  rightSection: {
    alignItems: 'flex-end' as const,
    gap: 4,
  },
  receiptButton: {
    paddingVertical: 2,
  },
  receiptText: {
    fontFamily: 'Inter',
    fontWeight: '500' as const,
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: -0.36, // -3%
    color: '#699091',
    textDecorationLine: 'underline' as const,
  },
  statusBadge: {
    alignSelf: 'flex-end' as const,
  },
  amountText: {
    fontFamily: 'Satoshi',
    fontWeight: '700' as const,
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: -0.48, // -2%
  },
  dateText: {
    fontFamily: 'Inter',
    fontWeight: '400' as const,
    fontSize: 12,
    lineHeight: 16.8, // 140%
    letterSpacing: -0.48, // -4%
    color: '#999999',
  },
};
