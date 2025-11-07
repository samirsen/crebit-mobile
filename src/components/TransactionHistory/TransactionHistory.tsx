import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import { StyledText } from '../StyledText';
import { StatusBadge } from '../StatusBadge';
import { Transaction, TransactionHistoryProps } from './TransactionHistory.types';
import { styles } from './TransactionHistory.styles';
import { useTransactionHistoryController } from './TransactionHistory.controller';

export const TransactionHistory: React.FC<TransactionHistoryProps> = React.memo(({
  transactions,
  onViewReceipt,
  style,
}) => {
  const { memoizedTransactions, handleViewReceipt, getAmountColor } = useTransactionHistoryController(
    transactions,
    onViewReceipt
  );

  const renderTransaction = (transaction: Transaction) => (
    <View key={transaction.id} style={styles.transactionCard}>
      <View style={styles.transactionHeader}>
        <StyledText style={styles.recipientText}>
          Payout to {transaction.recipient}
        </StyledText>
        <View style={styles.rightSection}>
          {transaction.showReceipt && (
            <TouchableOpacity
              onPress={() => handleViewReceipt(transaction.id)}
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
        { color: getAmountColor(transaction.status) }
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

