import { useMemo, useCallback } from 'react';
import { Transaction } from './TransactionHistory.types';
import { colors } from '../../constants/colors';

export const useTransactionHistoryController = (
  transactions: Transaction[],
  onViewReceipt?: (transactionId: string) => void
) => {
  const memoizedTransactions = useMemo(() => transactions, [transactions]);

  const handleViewReceipt = useCallback((transactionId: string) => {
    onViewReceipt?.(transactionId);
  }, [onViewReceipt]);

  const getAmountColor = useCallback((status: string) => {
    return status === 'processing' ? '#B47300' : colors.secondary;
  }, []);

  return {
    memoizedTransactions,
    handleViewReceipt,
    getAmountColor,
  };
};
